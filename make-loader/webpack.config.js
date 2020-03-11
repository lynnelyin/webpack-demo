const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'replaceLoader'
          },
          {
            loader: 'replaceLoaderAsync',
            options: {
              name: 'Yin'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}