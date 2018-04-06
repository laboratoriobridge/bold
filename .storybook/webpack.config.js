const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

const SRC_PATH = path.join(__dirname, '../src')

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, configType, defaultConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  defaultConfig.resolve.extensions.push('.ts', '.tsx')

  if (configType === 'PRODUCTION') {
    defaultConfig.plugins.push(new TSDocgenPlugin())
  }

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader',
    exclude: /node_modules/,
    include: [SRC_PATH],
  })
  defaultConfig.module.rules.push({
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  })
  defaultConfig.module.rules.push({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
  })

  return defaultConfig
}
