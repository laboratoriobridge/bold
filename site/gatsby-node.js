const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // due to broken linking react hooks
        // https://github.com/facebook/react/issues/13991#issuecomment-463486871
        react: path.resolve(path.join(__dirname, './node_modules/react')),
      },
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const extensionMatch = /^.*\.(\w+)\/?$/.exec(page.path)
  const extension = extensionMatch ? extensionMatch[1] : null
  const languages = page.context.intl.languages

  // Delete pages that have extensions and do not match the language (e.g. '/en/resources.pt')
  if (extension && extension !== page.context.intl.language) {
    deletePage(page)
  }

  languages.forEach((lang) => {
    // Change '/pt/resources.pt/' and '/pt/accordion/index.pt/' paths to '/pt/resources/' and '/pt/accordion/', respectively
    if (page.path.startsWith(`/${lang}/`) && page.path.endsWith(`.${lang}/`)) {
      const pathLang = page.path.replace(`/index.${lang}/`, '/').replace(`.${lang}/`, '/')
      createPage({ ...page, path: pathLang })
      deletePage(page)
    }
  })
}
