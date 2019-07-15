const withMDX = require('@next/mdx')

const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args)

const withPlugins = compose(
  withMDX({
    extension: /\.(md|mdx)/,
    options: {
      remarkPlugins: [require('remark-highlight.js'), require('remark-slug')],
    },
  })
)

module.exports = withPlugins({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config, options) => {
    return config
  },
})
