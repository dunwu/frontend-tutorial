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
