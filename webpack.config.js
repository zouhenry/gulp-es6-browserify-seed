/**
 * Created by hzou on 7/2/16.
 */

//SEE: https://webpack.github.io/docs/configuration.html

var path              = require( 'path' );
var webpack           = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
  // application entry point
  entry  : { app: "./src/index.js" },
  output : {
    filename: '[name].bundle.js',
    path    : "www"
  },
  module : {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.jade$/, loader: 'ng-cache!jade-html', exclude: [/index\.jade$/] },
      { test: /index\.jade$/, loader: 'jade' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: 'src/index.jade',
      inject  : 'body',
      hash    : true
    } ),
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin( {
      name     : 'vendor',
      minChunks: function( module, count ) {
        var isVendor = module.resource && module.resource.indexOf( path.resolve( __dirname, 'src' ) ) === -1;
        // console.log( 'module.resource:', isVendor, module.resource );
        return isVendor;
      }
    } )]
};