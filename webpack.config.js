const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ],
      config.minimize = true
  }
  return config
}

const filename = ext => isDev ? `[name].[hash].${ext}` : `[name].${ext}`

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analitics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js')
  },
  resolve: {
    extensions: ['.js', '.csv', '.json', '.xml', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from:
          path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        to:
          path.resolve(__dirname, 'dist/img/favicon.ico')
      }
    ]),
    new miniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: miniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          }
        },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: miniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          }
        },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
          loader: miniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          }
        },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp?g|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }
}