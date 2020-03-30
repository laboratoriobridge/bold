import React, { CSSProperties, HTMLAttributes } from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface TabItemProps extends Omit<HTMLAttributes<HTMLElement>, 'style'> {
  component?: React.ElementType
  active?: boolean
  disabled?: boolean
  children?: React.ReactNode
  style?: ExternalStyles
  [key: string]: any
}

export function TabItem(props: TabItemProps) {
  const { active, disabled, component, children, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const className =
    css(classes.item, active && classes.active, disabled && classes.disabled) + `${disabled ? ' disabled' : ''}`

  const Cmp = component

  return (
    <li className={css(classes.li, style)}>
      <Cmp role='tab' className={className} {...rest}>
        {children}
      </Cmp>
    </li>
  )
}

TabItem.defaultProps = {
  component: 'span',
}

const createStyles = (theme: Theme) => ({
  li: {
    display: 'inline-block',
    marginBottom: '-1px',

    '&:not(:first-child)': {
      marginLeft: '0.25rem',
    },
  } as CSSProperties,
  item: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.pallete.text.main,
    fontWeight: 'bold',
    padding: '0.375rem 0.5rem',
    lineHeight: '1rem',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    outline: 0,
    border: `1px solid ${theme.pallete.gray.c60}`,
    borderBottom: `1px solid ${theme.pallete.divider}`,
    background: theme.pallete.gray.c90,
    transition: 'background .15s, border-color .15s',

    '&:not(.disabled):hover': {
      cursor: 'pointer',
      background: theme.pallete.gray.c80,
    },

    '&:not(.disabled):active': {
      background: theme.pallete.gray.c80,
      boxShadow: theme.shadows.inner['10'],
    },

    '&:focus': {
      boxShadow: `inset 0 0 0 2px ${theme.pallete.primary.main}`,
      borderRadius: 4,
    },
  } as CSSProperties,
  active: {
    color: theme.pallete.primary.main,
    borderTop: `3px solid ${theme.pallete.primary.main}`,
    borderBottomColor: 'transparent',
    background: theme.pallete.gray.c100,

    '&:not(.disabled):hover': {
      background: theme.pallete.gray.c90,
    },

    '&:not(.disabled):active': {
      background: theme.pallete.gray.c90,
    },
  } as CSSProperties,
  disabled: {
    color: theme.pallete.text.disabled,

    '&:hover': {
      cursor: 'not-allowed',
    },
  } as CSSProperties,
})
