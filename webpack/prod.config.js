import webpack from 'webpack'
import path from 'path'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

const config = {
  entry: {
    index: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ],
              plugins: [
                ['inferno', { imports: true }],
                'ramda'
              ],
              babelrc: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/ ,
        use: ['raw-loader', 'glslify-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
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
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  resolve: {
    extensions: ['.js']
  }
}

export default config