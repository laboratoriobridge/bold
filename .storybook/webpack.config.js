const path = require('path')

const SRC_PATH = path.join(__dirname, '../src')

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env, config) => {
    // env has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH],
        use: [
            require.resolve('awesome-typescript-loader'),
            ...(env === 'PRODUCTION' ?
                [require.resolve('react-docgen-typescript-loader')] : []
            ),
        ],
    })
    config.module.rules.push({
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: [SRC_PATH],
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
    })
    config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: [SRC_PATH],
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
    })

    return config
}
