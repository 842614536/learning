const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClearDist = require('./plugins/clear-dist')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: "js/[name].js",
    // publicPath: "/webpack4/dist/",
    publicPath: "/"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     // {
      //     //   loader: './loaders/my-style-loader.js'
      //     // }
      //   ]
      // },
      {
        test: /\.css$/, use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            modules: true
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css"
    }),
    new ClearDist()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 1111,
    // open: true,
    hot: true
  }
}