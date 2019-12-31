const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    javascript: './src/index.js',
    // html: './public/index.html'
  },
  watchOptions: {
    poll: true
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/311-report',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CopyPlugin([{
      from: './public/index.html'
    },
  {from:'src/', to:''}])
  ],
};
