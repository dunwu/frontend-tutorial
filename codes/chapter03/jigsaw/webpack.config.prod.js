/**
 * Created by victor zhang on 2017/6/14.
 */
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = function (env) {
  return WebpackMerge(CommonConfig, {
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
