const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClearDist = require('./plugins/clear-dist')

module.exports = {
  mode: 'development',
  // mode: 'production',
  watch: true,
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'js/[name]-[chunkhash:5].js',
    publicPath: "/webpack4/dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
          // {
          //   loader: './loaders/my-style-loader.js'
          // }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ClearDist()
  ]
}