import { ThemeProvider } from 'bridge-react/lib'
import App from 'next/app'
import { Helmet } from 'react-helmet'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider>
        <Helmet>
          <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
        </Helmet>

        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
