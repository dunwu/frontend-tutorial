/**
 * Created by Zhang Peng on 2017/6/14.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  // 这里应用程序开始执行
  // webpack 开始打包
  // 本例中 entry 为多入口
  entry: {
    // 第三方库
    vendor: ['react']
  },

  // webpack 如何输出结果的相关选项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, 'dist'),

    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    // filename: "bundle.min.js",
    // filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
    // filename: "[chunkhash].js", // 用于长效缓存
    filename: '[name].[hash].js',

    // 「source map 位置」的文件名模板
    sourceMapFilename: '[name].map'
  },

  // 关于模块配置
  module: {

    // 模块规则（配置 loader、解析器等选项）
    rules: [
      // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
      // test 和 include 具有相同的作用，都是必须匹配选项
      // exclude 是必不匹配选项（优先于 test 和 include）
      // 最佳实践：
      // - 只在 test 和 文件名匹配 中使用正则表达式
      // - 在 include 和 exclude 中使用绝对路径数组
      // - 尽量避免 exclude，更倾向于使用 include
      {
        // 语义解释器，将 js/jsx 文件中的 es2015/react 语法自动转为浏览器可识别的 Javascript 语法
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,

        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。
        loader: 'babel-loader'
      },

      {
        // css 加载
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },

      {
        // 图片加载 + 图片压缩
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },

      {
        // 字体加载
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // 解析模块请求的选项
  // （不适用于对 loader 解析）
  resolve: {

    // 使用的扩展名
    extensions: ['.js', '.jsx', '.json', '.css']
  },

  // 附加插件列表
  plugins: [

    // 用于简化 HTML 文件（index.html）的创建，提供访问 bundle 的服务。
    new HtmlWebpackPlugin({
      title: 'react-step-by-step',
      template: './public/index.html'
    }),

    // 自动打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    }),

    // 将样式文件独立打包
    new ExtractTextPlugin('styles.css'),

    // 将多个入口起点之间共享的公共模块，生成为一些 chunk，并且分离到单独的 bundle 中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 指定公共 bundle 的名字
    })
  ]
};
