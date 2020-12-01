const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: ['css-loader', 'sass-loader'],
      }]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'style.css'
      }),
   ],
};