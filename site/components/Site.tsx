import { MDXProvider } from '@mdx-js/react'

import { ThemeProvider, useStyles } from '../../lib'
import { AppFooter } from '../components/AppFooter'
import { APP_HEADER_HEIGHT, AppHeader } from '../components/AppHeader'
import * as MDXComponents from '../components/mdx'
import { Page } from '../components/Page'
import { SideNav } from '../components/SideNav'
import { useThemeSwitch } from '../components/useThemeSwitch'
import pages from '../pages'

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
        <AppHeader currentTheme={currentTheme} onThemeSwitch={switchTheme} />
        <SiteContainer {...props} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export function SiteContainer(props: any) {
  const { Component, pageProps } = props as any
  const { classes } = useStyles(createStyles)
  const { route } = props.router

  return (
    <div className={classes.container}>
      <SideNav pages={pages} />

      <div className={classes.content}>
        {route === '/' ? (
          <Component {...pageProps} />
        ) : (
          <Page {...props}>
            <Component {...pageProps} />
          </Page>
        )}

        <AppFooter />
      </div>
    </div>
  )
}

const createStyles = () => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
  } as React.CSSProperties,
  content: {
    paddingTop: `calc(${APP_HEADER_HEIGHT}px)`,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
})
