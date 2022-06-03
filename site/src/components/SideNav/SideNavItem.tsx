import { Icon, Icons, Theme, useStyles } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import { useState } from 'react'
import React from 'react'

import { LocaleLink } from '../LocaleLink'

import { PageLink } from './SideNav'

export interface SideNavItemProps extends PageLink {
  onNavigate(): void
}

export const SideNavItem = (props: SideNavItemProps) => {
  const { href, icon, title, children, onNavigate, ...rest } = props
  const { classes } = useStyles(createStyles)
  const intl = useIntl()

  const [isCollapsed, setIsCollapsed] = useState(() => {
    return (
      href &&
      typeof location !== 'undefined' &&
      (location.pathname.startsWith(href) || location.pathname.startsWith(`/${intl.locale}${href}`))
    )
  })

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (children) {
      e.preventDefault()
      setIsCollapsed((collapsed) => !collapsed)
    } else {
      onNavigate()
    }
  }

  const LinkContent = (
    <>
      <Icon icon={icon as Icons} className={classes.icon} />
      <span className={classes.title}>{intl.formatMessage({ id: title })}</span>
      {children && <Icon icon={isCollapsed ? 'angleUp' : 'angleDown'} className={classes.iconDropdown} />}
    </>
  )

  return (
    <li>
      {(rest as any).target === '_blank' ? (
        <a href={href} className={classes.link} onClick={handleLinkClick} {...rest}>
          {LinkContent}
        </a>
      ) : (
        <LocaleLink
          to={href}
          activeClassName='active'
          className={classes.link}
          onClick={handleLinkClick}
          partiallyActive
          {...rest}
        >
          {LinkContent}
        </LocaleLink>
      )}

      {children && isCollapsed && (
        <ul className={classes.sublist}>
          {children.map((sub) => (
            <li key={sub.href}>
              <LocaleLink
                to={sub.href}
                activeClassName='active'
                className={classes.sublink}
                onClick={onNavigate}
                partiallyActive
              >
                {intl.formatMessage({ id: sub.title })}
              </LocaleLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const createStyles = (theme: Theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: theme.pallete.text.main,
    textDecoration: 'none',
    padding: '1rem 0 1rem 2rem',
    transition: 'background 0.2s ease',
    fontWeight: 'bold',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      borderRight: `4px solid ${theme.pallete.primary.main}`,
    },
  } as React.CSSProperties,
  title: {
    flex: 1,
  },
  icon: {
    fontSize: '24px',
    marginRight: '1.5rem',
  },
  sublist: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  sublink: {
    fontWeight: 'normal',
    fontSize: 13,
    padding: '0.5rem 0 0.5rem 5rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.pallete.text.main,
    textDecoration: 'none',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      fontWeight: 'bold',
    },
  } as React.CSSProperties,
  iconDropdown: {
    fontSize: '24px',
    marginRight: '1rem',
  } as React.CSSProperties,
})
