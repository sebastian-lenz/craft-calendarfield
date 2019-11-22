const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    calendar: './assets/calendar/index.ts',
    field: './assets/field/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/resources/bundle.css',
      ignoreOrder: false,
    }),
  ],
  externals: {
    leaflet: 'L',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name]/resources/bundle.js',
    path: path.resolve(__dirname, 'src', 'assets'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ terserOptions: { output: { semicolons: false } } }),
    ],
  },
};
