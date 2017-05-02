const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    /*加载器*/
    loaders: [
      {test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'},
      {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap'},
      {test: /\.less$/, loader: 'style-loader!less-loader?sourceMap'},
      {test: /\.scss$/, loader: "style!css!sass?sourceMap"},
      {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=819200'},
      {test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime', ["antd", {"style": "css"}]]
  },
  /*插件*/
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};

/*
if (process.env.NODE_ENV !== 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}*/
