/**
 * Created by hzou on 7/2/16.
 */
// Karma configuration
var _             = require( 'lodash' );
var webpackConfig = require( './webpack.config' );
var webpackModule = { module: webpackConfig.module };

module.exports = function( config ) {
  config.set( {
    // ... normal karma configuration
    browsers  : ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters : ['progress', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      type : 'text'
    },

    files: [
      // all files ending in ".spec.js"
      'src/vendor/vendor.js',
      'src/app/app.js',
      'src/app/**/*.spec.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/vendor/vendor.js': ['webpack'],
      'src/app/app.js': ['webpack', 'sourcemap', 'coverage'],
      'src/app/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: _.extend( webpackModule, {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      devtool: 'inline-source-map'
    } ),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    }
  } );
};