const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3004/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './client/src/index.jsx'
    // SOURCE: https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
