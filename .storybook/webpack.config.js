const path = require('path')

const SRC_PATH = path.join(__dirname, '../src')

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, configType, defaultConfig) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    defaultConfig.resolve.extensions.push('.ts', '.tsx')

    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH],
        use: [
            require.resolve('awesome-typescript-loader'),
            ...(configType === 'PRODUCTION' ?
                [require.resolve('react-docgen-typescript-loader')] : []
            ),
        ],
    })
    defaultConfig.module.rules.push({
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: [SRC_PATH],
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
    })
    defaultConfig.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: [SRC_PATH],
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
    })

    return defaultConfig
}
