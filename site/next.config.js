const withTypescript = require('@zeit/next-typescript')
const withMDX = require('@zeit/next-mdx')

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args)

const withPlugins = compose(
  withMDX({
    extension: /\.(md|mdx)/,
  }),
  withTypescript
)

module.exports = withPlugins({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config, options) => {
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    }
  },
})
