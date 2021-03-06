const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 1,
          //     modules: true
          //   }
          // }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader', options: { importLoaders: 1 } },
      //     {
      //       loader: 'less-loader',
      //       options: { javascriptEnabled: true, modifyVars: themeVariables }
      //     }
      //   ]
      // },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      GRAPH: path.resolve(__dirname, '..', './src/graphql'),
      SRC: path.resolve(__dirname, '..', './src'),
      PAGE: path.resolve(__dirname, '..', './src/components'),
      STYLE: path.resolve(__dirname, '..', './src/style')
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Huy IT',
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};
