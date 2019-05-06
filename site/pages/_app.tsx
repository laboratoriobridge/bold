import App from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

import { Site } from '../components/Site'

export default class extends App {
  render() {
    return <BoldApp {...this.props} />
  }
}

const BoldApp = (props: any) => {
  useEffect(() => {
    ReactGA.initialize('UA-139158849-1')
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [props.router.route])

  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        <title>Bold Design System</title>

        <link href='/static/image/favicon.png' rel='icon' />
        <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i' rel='stylesheet' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css' />
      </Head>

      <Site {...props} />
    </>
  )
}
