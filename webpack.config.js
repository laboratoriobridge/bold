// @ts-check

const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const TerserPlugin = require('terser-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'bold',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/,
      },
      {
        loader: 'raw-loader',
        test: /\.css$/,
      },
    ],
  },
  plugins: [new CheckerPlugin()],
  externals: ['react', 'react-dom'],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
          compress: {
            keep_fnames: true,
          },
          mangle: {
            keep_fnames: true,
          },
        },
      }),
    ],
  },
}

module.exports = config
