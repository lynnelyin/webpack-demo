const express = require('express')
const webpack = require('webpack')
// 该中间件当监听到打包文件发生变化时，自动重新打包
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
// 在 node 中直接使用 webpack
const compiler = webpack(config)

const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.listen(3000, () => {
  console.log('server listen on port 3000....')
})