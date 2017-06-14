/**
 * Created by victor zhang on 2017/6/14.
 */
const path = require('path');
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
          'NODE_ENV': JSON.stringify('development')
        }
      }),

      // 热替换插件
      new webpack.HotModuleReplacementPlugin()
    ],

    // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // devtool: "source-map", // 牺牲了构建速度的 `source-map' 是最详细的
    // devtool: "inline-source-map", // 嵌入到源文件中
    // devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
    // devtool: "hidden-source-map", // SourceMap 不在源文件中引用
    // devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
    devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
    // devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。

    devServer: {
      contentBase: [path.join(__dirname, "dist")],
      compress: true,
      port: 9000, // 启动端口号
      hot: true, // 启用 webpack 的模块热替换特性
      inline: true,
      proxy: {
        '/api/*': {
          target: 'http://localhost:5000',
          secure: false
        }
      }
    }
  })
};
