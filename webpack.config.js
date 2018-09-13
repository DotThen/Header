const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public/dist');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './client/src/index.jsx'
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [new webpack.HotModuleReplacementPlugin() /* , new webpack.NoEmitOnErrorsPlugin() */],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
