/* eslint no-var: 0, import/no-extraneous-dependencies: 0*/
// var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: { path: __dirname, filename: 'dist/bundle.js' },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!sass-loader?sourceMap',
        ),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('dist/styles.css'),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
};
