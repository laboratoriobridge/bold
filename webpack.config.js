const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    // entry: './src/index.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js',
        library: 'bridge-react',
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
    plugins: [
        new CheckerPlugin(),
    ],
    externals: [
        'axios',
        'emotion',
        'final-form',
        'history',
        'moment',
        'react',
        'react-final-form',
        'react-redux',
        'react-router-dom',
        'tslint-react',
    ],
}
