import { ThemeProvider, useStyles } from 'bold-ui'
import React, { useState } from 'react'

import { AppFooter } from '../components/AppFooter'
import { SideNav } from '../components/SideNav'
import pages from '../pages'

import { APP_HEADER_HEIGHT, AppHeader } from './AppHeader'
import { Page } from './Page'
import { SkipToContentLink } from './SkipToContentLink'
import { useThemeSwitch } from './useThemeSwitch'

export interface PageLayoutProps {
  container?: boolean
  children?: React.ReactNode
}

export function PageLayout(props: PageLayoutProps) {
  const { container, children } = props

  const [currentTheme, switchTheme] = useThemeSwitch()
  const { classes } = useStyles(createStyles)

  const [navOpen, setNavOpen] = useState(false)

  return (
    <ThemeProvider theme={currentTheme}>
      <SkipToContentLink />
      <AppHeader navOpen={navOpen} onNavChange={setNavOpen} switchTheme={switchTheme} />

      <div className={classes.container}>
        <SideNav pages={pages} open={navOpen} onChangeOpen={setNavOpen} />

        <div className={classes.content} style={{ background: currentTheme.pallete.surface.main }} id='main'>
          {container ? <Page>{children}</Page> : children}

          <AppFooter />
        </div>
      </div>
    </ThemeProvider>
  )
}

PageLayout.defaultProps = {
  container: true,
} as Partial<PageLayoutProps>

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
    maxWidth: '100%',
  } as React.CSSProperties,
})
