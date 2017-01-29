import webpack from 'webpack'
import path from 'path'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

const HOST = 'localhost'
const PORT = 3001
const PUBLIC_PATH = `//${HOST}:${PORT}/assets/`
const HOT_ENTRY = 
  `webpack-hot-middleware/client?path=//${HOST}:${PORT}/__webpack_hmr`

const config = {
  server: {
    port: PORT,
    options: {
      publicPath: PUBLIC_PATH,
      hot: true,
      stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
      }
    }
  },
  webpack: {
    devtool: 'cheap-module-source-map',
    entry: {
      index: [
        HOT_ENTRY, 
        './app/index.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../public'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: PUBLIC_PATH
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/,
          use: ['babel-loader', 'webpack-module-hot-accept']
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
                localIdentName: '[local]__[hash:base64:5]' 
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
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
      extensions: ['.js']
    }
  }
}

export default config