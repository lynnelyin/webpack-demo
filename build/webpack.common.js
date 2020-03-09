const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'imports-loader?this=>window'
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // placeholder 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240
            // 小于 limit，以 base64 格式打包到 js 文件里
            // 大于 limit，将图片移到 dist 目录下
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff)/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), 
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join: ['lodash', 'join']
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}