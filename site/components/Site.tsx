import { MDXProvider } from '@mdx-js/react'

import { ThemeProvider } from '../../lib'
import * as MDXComponents from '../components/mdx'
import { Page } from '../components/Page'
import { PageLayout } from '../components/PageLayout'
import { useThemeSwitch } from '../components/useThemeSwitch'

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

export function Site(props: any) {
  const [currentTheme, switchTheme] = useThemeSwitch()

  return (
    <ThemeProvider theme={currentTheme}>
      <MDXProvider components={mdxComponents}>
        <SiteContainer switchTheme={switchTheme} {...props} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export function SiteContainer(props: any) {
  const { Component, pageProps } = props as any
  const { route } = props.router

  return (
    <PageLayout switchTheme={props.switchTheme}>
      {route === '/' ? (
        <Component {...pageProps} />
      ) : (
        <Page {...props}>
          <Component {...pageProps} />
        </Page>
      )}
    </PageLayout>
  )
}
