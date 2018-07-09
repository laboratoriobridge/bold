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
        'emotion-theming',
        'final-form',
        'final-form-focus',
        'history',
        'moment',
        'normalize.css',
        'react',
        'react-datepicker',
        'react-dom',
        'react-dropzone',
        'react-final-form',
        'react-popper',
        'react-redux',
        'react-router-dom',
        'react-select',
        'react-text-mask',
        'text-mask-core',
        'tslint-react',
        'react-datepicker/dist/react-datepicker.css',
        'react-select/dist/react-select.css',
    ],
}
