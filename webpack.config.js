/**
 * Created by hzou on 7/2/16.
 */

//SEE: https://webpack.github.io/docs/configuration.html

var path              = require( 'path' );
var webpack           = require( 'webpack' );
// var ngminPlugin = require('ngmin-webpack-plugin');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// var ExtractTextPlugin = require('extract-text-webpack-plugin');


var appRoot = path.join( __dirname, '/src' );

module.exports = {
  /*
   The base directory (absolute path!) for resolving the entry option. If output.pathinfo is set, the included pathinfo is shortened to this directory.

   Default: process.cwd()
   */
  // context: appRoot,
  cache: true,
  debug: true,

  /*
   The entry point for the bundle.
   If you pass a string: The string is resolved to a module which is loaded upon startup.
   If you pass an array: All modules are loaded upon startup. The last one is exported.

   Example:
   entry: ["./entry1", "./entry2"]
   */
  entry  : {
    app   : appRoot + "/app/app.js",
    vendor: appRoot + "/vendor/vendor.js"
  },
  output : {
    filename: '[name].bundle.js',
    path: "/www/"

  },
  module : {
    loaders: [
      {
        test   : /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel', // 'babel-loader' is also a legal name to reference
        query  : {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin( {
    title   : 'Angular ES6 Seed',
    template: 'src/index.html'
  } )]
};