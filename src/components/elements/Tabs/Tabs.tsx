import React, { CSSProperties } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { useRovingTabIndex } from '../../../hooks/useRovingTabIndex'
import { Theme, useStyles, WithStylesProps } from '../../../styles'

export interface TabsProps extends React.HTMLAttributes<HTMLUListElement> {}

export function Tabs(props: TabsProps) {
  const { ...rest } = props
  const { classes } = useStyles(createStyles)

  const rootRef = useRovingTabIndex({
    getItems: root => Array.from(root.querySelectorAll('a[role="tab"]')),
  })

  return <ul ref={rootRef} className={classes.ul} role='tablist' {...rest} />
}

export interface TabLinkProps extends WithStylesProps, Pick<NavLinkProps, 'to' | 'replace' | 'exact'> {
  active?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

export function TabLink(props: TabLinkProps) {
  const { active, children, disabled, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const isActive = (match, location) => {
    return props.active || match
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      // Do not navitate if link is disabled
      e.preventDefault()
    }
  }

  return (
    <li className={classes.li} role='presentation'>
      <NavLink
        className={css(classes.a, disabled && classes.disabled) + `${disabled ? ' disabled' : ''}`}
        isActive={isActive}
        role='tab'
        aria-disabled={disabled === true ? disabled : undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </NavLink>
    </li>
  )
}

TabLink.defaultProps = {
  active: false,
  disabled: false,
} as Partial<TabLinkProps>

const createStyles = (theme: Theme) => ({
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    fontSize: theme.typography.sizes.button,
  } as CSSProperties,
  li: {
    display: 'inline-block',
  } as CSSProperties,
  a: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.pallete.text.main,
    fontWeight: 'bold',
    padding: '0.5rem 0.75rem',
    lineHeight: '1rem',
    borderRadius: 4,
    outline: 0,
    border: '2px solid transparent',
    transition: 'background .15s, border-color .15s',

    '&.active': {
      color: theme.pallete.primary.main,
      borderBottomColor: theme.pallete.primary.main,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    '&:not(.disabled):hover': {
      background: theme.pallete.gray.c90,
    },

    '&:focus': {
      borderColor: theme.pallete.primary.main,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },

    '&:not(.disabled):active': {
      background: theme.pallete.gray.c90,
      boxShadow: theme.shadows.inner['10'],
    },
  } as CSSProperties,
  disabled: {
    color: theme.pallete.text.disabled,
    cursor: 'not-allowed',
  } as CSSProperties,
})
