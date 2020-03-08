const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jpg$/,
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
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              // 在 index.scss 文件里通过@引入其他 scss 文件要经过多少个 loader
              importLoaders: 2,
              // // 开启 css 模块化
              // modules: true
            }
          },
          'sass-loader', 
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
            new HtmlWebpackPlugin({
              template: 'src/index.html'
            }), 
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
          ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}