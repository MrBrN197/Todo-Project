const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack-dev-server');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};

module.exports = config;