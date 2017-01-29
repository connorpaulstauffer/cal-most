'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _precss = require('precss');

var _precss2 = _interopRequireDefault(_precss);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  entry: {
    index: './app/index.js'
  },
  output: {
    path: _path2.default.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }]],
          plugins: [['inferno', { imports: true }], 'ramda'],
          babelrc: false
        }
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[hash:base64:5]'
        }
      }, 'postcss-loader', 'sass-loader']
    }, {
      test: /\.(glsl|frag|vert)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader']
    }]
  },
  plugins: [new _webpack2.default.NoEmitOnErrorsPlugin(), new _webpack2.default.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
  }), new _webpack2.default.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  })],
  resolve: {
    extensions: ['.js']
  }
};

exports.default = config;
