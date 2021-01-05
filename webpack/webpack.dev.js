const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom',
      React: 'react'
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './src'),
    historyApiFallback: true,
    hot: true
  },
  devtool: 'eval-source-map'
};
