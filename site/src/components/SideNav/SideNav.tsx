import { Icons, Omit, Theme, useStyles } from 'bold-ui'
import { useClickOutside } from 'bold-ui/hooks/useClickOutside'
import React, { useRef } from 'react'

import { APP_HEADER_HEIGHT } from '../AppHeader'

import { SideNavItem } from './SideNavItem'

export interface PageLink {
  href?: string
  title: React.ReactNode
  icon: Icons | string
  children?: Array<Omit<PageLink, 'icon' | 'children'>>
}

export interface SideNavProps {
  pages: PageLink[]
  open: boolean
  onChangeOpen(open: boolean): void
}

export function SideNav(props: SideNavProps) {
  const { pages, onChangeOpen } = props

  const { classes } = useStyles(createStyles, props)

  const wrapperRef = useRef<HTMLDivElement>(null)
  useClickOutside(wrapperRef, () => onChangeOpen(false))
  const handleNavigate = () => onChangeOpen(false)

  return (
    <div ref={wrapperRef} className={classes.wrapper}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {pages.map(link => (
            <SideNavItem key={link.href} onNavigate={handleNavigate} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export const SIDE_NAV_WIDTH = 288

const createStyles = (theme: Theme, { open }: SideNavProps) => ({
  wrapper: {
    width: SIDE_NAV_WIDTH,
    flexShrink: 0,
    transition: 'all .2s ease',

    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      zIndex: 10,
      left: open ? 0 : -SIDE_NAV_WIDTH,
    },
  } as React.CSSProperties,
  nav: {
    background: theme.pallete.surface.main,
    width: SIDE_NAV_WIDTH,
    borderRight: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer[40],
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 0',
    marginTop: APP_HEADER_HEIGHT,
    position: 'fixed',
    zIndex: 10,
    overflow: 'auto',
    height: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
    svg: {
      fill: 'currentColor',
    },
  } as React.CSSProperties,
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
})
