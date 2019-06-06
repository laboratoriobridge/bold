import React, { useState } from 'react'

import { useStyles } from '../../lib'
import { AppFooter } from '../components/AppFooter'
import { SideNav } from '../components/SideNav'
import pages from '../pages'

import { APP_HEADER_HEIGHT, AppHeader } from './AppHeader'

export interface PageLayoutProps {
  children?: React.ReactNode
  switchTheme(): void
}

export function PageLayout(props: PageLayoutProps) {
  const { switchTheme, children } = props
  const { classes } = useStyles(createStyles)

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <AppHeader navOpen={navOpen} onNavChange={setNavOpen} switchTheme={switchTheme} />

      <div className={classes.container}>
        <SideNav pages={pages} open={navOpen} onChangeOpen={setNavOpen} />

        <div className={classes.content}>
          {children}

          <AppFooter />
        </div>
      </div>
    </>
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
