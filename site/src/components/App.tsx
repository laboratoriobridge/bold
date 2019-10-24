import { MDXProvider } from '@mdx-js/react'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

import * as MDXComponents from './mdx'

export function App({ children }) {
  useEffect(() => {
    ReactGA.initialize('UA-139158849-1')
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [
    typeof window !== 'undefined' && window.location.pathname,
    typeof window !== 'undefined' && window.location.search,
  ])

  return (
    <MDXProvider components={mdxComponents}>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        <meta name='google-site-verification' content='9wtCJ3N0XgFLGgfGyveZ0DCYfh8JJpcICsiqBsh5YHk' />

        <title>Bold Design System</title>

        <link href='/image/favicon.png' rel='icon' />
        <link href='//fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
        <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css' />
      </Helmet>

      {children}
    </MDXProvider>
  )
}

const mdxComponents = {
  p: MDXComponents.Paragraph,
  a: MDXComponents.Link,
  img: MDXComponents.Image,
  h1: MDXComponents.createHeading(1),
  h2: MDXComponents.createHeading(2),
  h3: MDXComponents.createHeading(3),
  h4: MDXComponents.createHeading(4),
  h5: MDXComponents.createHeading(5),
  h6: MDXComponents.createHeading(6),
  ul: MDXComponents.UnorderedList,
  ol: MDXComponents.OrderedList,
  blockquote: MDXComponents.Blockquote,
  table: MDXComponents.Table,
  pre: MDXComponents.Pre,
  code: MDXComponents.Code,
  inlineCode: MDXComponents.Code,
}
