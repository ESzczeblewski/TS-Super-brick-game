const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // devServer: {
  //   static: path.resolve(__dirname, '.'),
  //   devMiddleware: {
  //     publicPath: "/dist"
  //   },
  //    client: {
  //      logging: 'error'
  //    }
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
}