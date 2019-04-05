const path = require('path')

const SRC_PATH = path.join(__dirname, '../src')

module.exports = ({ config, mode }) => {
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      require.resolve('awesome-typescript-loader'),
      // ...(mode === 'PRODUCTION' ?
      // [require.resolve('react-docgen-typescript-loader')] : []
      // ),
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
