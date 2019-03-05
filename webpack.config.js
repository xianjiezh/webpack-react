const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('path', path.join(__dirname, './webpack.config.js'))


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle[hash].js',
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,    //移除HTML中的注释
        collapseWhitespace: true,    //删除空白符与换行符
     }
    }),
    // 添加hot之后会自动引入这个插件
    // new webpack.HotModuleReplacementPlugin
  ],
}