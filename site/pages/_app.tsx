import App from 'next/app'
import { Helmet } from 'react-helmet'

import { ThemeProvider, useStyles } from '../../lib'
import { AppHeader } from '../components/AppHeader'
import { PageContent } from '../components/PageContent'
import { SideNav } from '../components/SideNav'
import { useThemeSwitch } from '../components/useThemeSwitch'
import pages from '../pages'

export default class extends App {
  render() {
    return <BoldApp {...this.props} />
  }
}

const BoldApp = (props: any) => {
  return (
    <>
      <Helmet>
        <link href='/static/image/favicon.png' rel='icon' />
        <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css' />
        <title>Bold Design System</title>
      </Helmet>

      <Content {...props} />
    </>
  )
}

const Content = (props: any) => {
  const { Component, pageProps } = props as any
  const { classes } = useStyles(createStyles)
  const [currentTheme, switchTheme] = useThemeSwitch()

  return (
    <ThemeProvider theme={currentTheme}>
      <AppHeader currentTheme={currentTheme} onThemeSwitch={switchTheme} />

      <div className={classes.content}>
        <SideNav pages={pages} />
        <PageContent>
          <Component {...pageProps} />
        </PageContent>
      </div>
    </ThemeProvider>
  )
}

const createStyles = () => ({
  content: {
    display: 'flex',
  } as React.CSSProperties,
})
