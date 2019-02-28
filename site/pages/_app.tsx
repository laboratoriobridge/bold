import { ThemeProvider } from 'bridge-react/lib'
import { css, Interpolation } from 'emotion'
import App from 'next/app'
import { Helmet } from 'react-helmet'

import { AppHeader } from '../components/AppHeader'
import { PageContent } from '../components/PageContent'
import { SideNav } from '../components/SideNav'
import pages from '../pages'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props as any
    const styles = createStyles()

    return (
      <ThemeProvider>
        <Helmet>
          <link href='/static/image/favicon.png' rel='icon' />
          <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
          <title>Bold Design System</title>
        </Helmet>

        <AppHeader />

        <div className={css(styles.content)}>
          <SideNav pages={pages} />
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </div>
      </ThemeProvider>
    )
  }
}

const createStyles = () => ({
  content: {
    display: 'flex',
  } as Interpolation,
})
