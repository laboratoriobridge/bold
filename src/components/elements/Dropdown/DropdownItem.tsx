import React from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../../styles'

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'normal' | 'danger'
  disabled?: boolean
  component?: React.ElementType<any>
  [prop: string]: any
}

export function DropdownItem(props: DropdownItemProps) {
  const { type, disabled, children, onClick, component: Component, ...rest } = props
  const { classes, css } = useStyles(styles)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const elem = event.target as any
      elem.click()
    }
  }

  const classNames = css(classes.item, type === 'danger' && classes.danger, disabled && classes.disabled)

  return (
    <Component
      className={classNames}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role='menuitem'
      aria-disabled={disabled ? true : undefined}
      {...rest}
    >
      {children}
    </Component>
  )
}

DropdownItem.defaultProps = {
  component: 'li',
  type: 'normal',
  disabled: false,
} as Partial<DropdownItemProps>

const styles = (theme: Theme) => ({
  item: {
    margin: 0,
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    fontWeight: 'bolder',
    outline: 'none',
    fontSize: theme.typography.sizes.button,
    transition: 'all .2s ease',
    display: 'block',
    '&:hover': {
      background: theme.pallete.surface.background,
    },
    '&:focus': {
      boxShadow: focusBoxShadow(theme, 'primary', 'inset'),
      borderRadius: 4,
    },
  } as React.CSSProperties,
  disabled: {
    color: theme.pallete.text.disabled,
    '&:hover': {
      cursor: 'not-allowed',
    },
  },
  danger: {
    color: theme.pallete.status.danger.main,
    '&:hover': {
      color: theme.pallete.surface.main,
      background: theme.pallete.status.danger.main,
    },
    '&:focus': {
      boxShadow: focusBoxShadow(theme, 'danger', 'inset'),
      borderRadius: 4,
    },
  },
})
