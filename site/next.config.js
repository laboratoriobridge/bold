const withTypescript = require('@zeit/next-typescript')
const withImages = require('next-images')

module.exports = withTypescript(
  withImages({
    webpack(config, options) {
      return config
    },
    exportPathMap() {
      return {
        '/': { page: '/' },
      }
    },
  })
)
