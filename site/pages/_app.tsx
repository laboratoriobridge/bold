import App from 'next/app'
import { withRouter, WithRouterProps } from 'next/router'
import { Helmet } from 'react-helmet'

import { ThemeProvider, useStyles } from '../../lib'
import { AppFooter } from '../components/AppFooter'
import { APP_HEADER_HEIGHT, AppHeader } from '../components/AppHeader'
import { Page } from '../components/Page'
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
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        <title>Bold Design System</title>

        <link href='/static/image/favicon.png' rel='icon' />
        <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css' />
      </Helmet>

      <Content {...props} />
    </>
  )
}

const Content = (props: any) => {
  const { Component, pageProps } = props as any
  const { classes } = useStyles(createStyles)
  const [currentTheme, switchTheme] = useThemeSwitch()
  const { route } = props.router

  return (
    <ThemeProvider theme={currentTheme}>
      <AppHeader currentTheme={currentTheme} onThemeSwitch={switchTheme} />

      <div className={classes.container}>
        <SideNav pages={pages} />

        <div className={classes.content}>
          {route === '/' ? (
            <Component {...pageProps} />
          ) : (
            <Page>
              <Component {...pageProps} />
            </Page>
          )}

          <AppFooter />
        </div>
      </div>
    </ThemeProvider>
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
