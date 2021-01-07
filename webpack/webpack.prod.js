const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  mode: {

  }
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom',
      React: 'react'
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
       //optimize css
      new OptimizeCssAssetsWebpackPlugin(),
      //optimize js
      new TerserPlugin(),
    ]
  }
  // devtool: 'eval-source-map'
};
