const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src"),
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项

    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    publicPath: "http://localhost:3000/",
  },

  module: {
    // 关于模块配置

    rules: [
      // 模块规则（配置加载器、解析器等选项）

      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include

        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的

        /*options: {
          presets: ["es2015", "react", "stage-0"]
        }*/
      }
    ]
  },

  devServer: {
    // proxy: { // 代理
    //   '/api': 'http://localhost:3000'
    // },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    port: 3000,
    // ...
  },

  plugins: [
    // 插件列表
    new HtmlWebpackPlugin({
      filename: 'index.html', //设置最后生成文件名称;
      template: __dirname + '/public/index.html' //设置模板文件;
    }),
  ]
};