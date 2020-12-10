const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: `${srcPath}/index.js`,
  devtool: 'source-map',
  devServer: {
    contentBase: buildPath,
    open: true,
    compress: true,
    port: 3000,
    host: '0.0.0.0' // To expose contents via docker
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(woff(2)?|ico|png|jpg|jpeg|svg|ttf)$/i, type: 'asset', generator: { filename: 'resources/[name].[contenthash][ext]' }},
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    publicPath: '',
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${srcPath}/index.html`,
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
  }
}