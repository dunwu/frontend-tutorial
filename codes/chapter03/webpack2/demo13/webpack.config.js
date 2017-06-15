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
    main: [
      // App 入口
      "./app/index",

      // 开启 React 代码的模块热替换(HMR)
      'react-hot-loader/patch',

      // 为 webpack-dev-server 的环境打包代码
      // 然后连接到指定服务器域名与端口
      'webpack-dev-server/client?http://localhost:9000',

      // 为热替换(HMR)打包好代码
      // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
      'webpack/hot/only-dev-server',
    ],

    // 第三方库
    vendor: ["react"]
  },

  // webpack 如何输出结果的相关选项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    // filename: "bundle.min.js",
    // filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
    // filename: "[chunkhash].js", // 用于长效缓存
    filename: "[name].js", // 用于长效缓存

    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    publicPath: "/"
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
        include: path.resolve(__dirname, "app"),
        exclude: /node_modules/,

        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。
        loader: "babel-loader",

        // loader 的可选项
        options: {
          presets: [
            // webpack 现在已经支持原生的 import 语句了, 并且将其运用在 tree-shaking 特性上
            [
              "es2015",
              {
                "modules": false
              }
            ],

            "react" // 转译 React 组件为 JavaScript 代码
          ],
          plugins: [
            "syntax-dynamic-import",  // 动态导入插件
            "react-hot-loader/babel" // 开启 React 代码的模块热替换(HMR)
          ]
        },
      },

      {
        // css 加载
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },

  // 解析模块请求的选项
  // （不适用于对 loader 解析）
  resolve: {

    // 使用的扩展名
    extensions: [".js", ".jsx", ".json", ".css"],
  },

  // 附加插件列表
  plugins: [

    // 压缩 js 插件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 用于简化 HTML 文件（index.html）的创建，提供访问 bundle 的服务。
    new HtmlWebpackPlugin({
      title: "react-step-by-step",
      template: "./public/index.html"
    }),

    // 自动打开浏览器
    new OpenBrowserPlugin({
      url: "http://localhost:9000"
    }),

    // 将样式文件独立打包
    new ExtractTextPlugin("styles.css"),

    // 将多个入口起点之间共享的公共模块，生成为一些 chunk，并且分离到单独的 bundle 中
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor" // 指定公共 bundle 的名字
    }),

    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),

    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NamedModulesPlugin(),
  ],

  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // devtool: "source-map", // 牺牲了构建速度的 `source-map' 是最详细的
  // devtool: "inline-source-map", // 嵌入到源文件中
  devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
  // devtool: "hidden-source-map", // SourceMap 不在源文件中引用
  // devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
  // devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
  // devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。

  devServer: {
    contentBase: [path.join(__dirname, "dist")],
    compress: true,
    port: 9000, // 启动端口号
    hot: true, // 启用 webpack 的模块热替换特性
    inline: true,
    publicPath: "/", // 和上文 output 的“publicPath”值保持一致
  }
};
