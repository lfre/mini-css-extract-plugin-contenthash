const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    file1: './src/file1.scss',
    /*
       To display the issue, comment out file2 entry, the contenthash of file3 will change when it shouldn't.
       This is due to: https://github.com/webpack/webpack/blob/master/lib/Module.js#L311
       Possible fix:
         - Assign a consistent id (this.id) to CSSModule https://github.com/webpack-contrib/mini-css-extract-plugin/blob/master/src/index.js#L42
           such as `dependency.context`
    */
    file2: './src/file2.scss',
    file3: './src/file3.scss',
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
};
