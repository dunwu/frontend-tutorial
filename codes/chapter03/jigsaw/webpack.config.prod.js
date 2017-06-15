/**
 * Created by victor zhang on 2017/6/14.
 */
const path = require('path');
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = function (env) {
  return WebpackMerge(CommonConfig, {
    // 这里应用程序开始执行
    // webpack 开始打包
    // 本例中 entry 为多入口
    entry: {
      main: [
        // App 入口
        "./app/index",
      ],
    },

    // 关于模块配置
    module: {

      // 模块规则（配置 loader、解析器等选项）
      rules: [
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
            presets: ["es2015", "react"],
            plugins: ["syntax-dynamic-import"] // 动态导入插件
          }
        }

      ]
    },

    // 附加插件列表
    plugins: [

      // 定义环境变量
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),

      // 加载选项插件
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      // 压缩 js 插件
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,  // remove all comments
        },
        compress: {
          warnings: false
        }
      }),
    ],
  })
};
