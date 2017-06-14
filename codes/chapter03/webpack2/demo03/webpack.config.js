const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

  // 这里应用程序开始执行
  // webpack 开始打包
  // 本例中 entry 为多入口
  entry: {
    main: "./app/index"
  },

  // webpack 如何输出结果的相关选项
  output: {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    filename: "bundle.js",
    // filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
    // filename: "[chunkhash].js", // 用于长效缓存
    // filename: "[name].[chunkhash:8].js", // 用于长效缓存
  },

  // 解析模块请求的选项
  // （不适用于对 loader 解析）
  resolve: {

    // 使用的扩展名
    extensions: [".js", ".jsx", ".json", ".css"],
  },

  // 附加插件列表
  plugins: [

    // 用于简化 HTML 文件（index.html）的创建，提供访问 bundle 的服务。
    new HtmlWebpackPlugin({
      title: "react-step-by-step",
      template: "./public/index.html"
    }),

    // 自动打开浏览器
    new OpenBrowserPlugin({
      url: "http://localhost:8080"
    })
  ]
};
