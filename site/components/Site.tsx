import { ThemeProvider, useStyles } from '../../lib'
import { AppFooter } from '../components/AppFooter'
import { APP_HEADER_HEIGHT, AppHeader } from '../components/AppHeader'
import { Page } from '../components/Page'
import { SideNav } from '../components/SideNav'
import { useThemeSwitch } from '../components/useThemeSwitch'
import pages from '../pages'

export function Site(props: any) {
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
