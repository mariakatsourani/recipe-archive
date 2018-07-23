const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'content/dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin([
      {
        context: 'src',
        from: 'assets',
        to: 'assets'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }
    ]
  }
};
