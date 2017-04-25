module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000,
    hot:true,
    progress:true,
    historyApiFallback:true
  },

  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'}
    ]
  }
};