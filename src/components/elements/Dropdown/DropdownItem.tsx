import React from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../../styles'
import { composeRefs } from '../../../util/react'

export interface DropdownItemProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
  type?: 'normal' | 'danger'
  disabled?: boolean
  innerRef?: React.RefObject<HTMLLIElement>
}

export function DropdownItem(props: DropdownItemProps) {
  const { type, disabled, children, onClick, innerRef, ...rest } = props
  const { classes, css } = useStyles(styles)

  const ref = React.useRef<HTMLLIElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      ref.current.click()
    }
  }

  const classNames = css(classes.item, type === 'danger' && classes.danger, disabled && classes.disabled)

  return (
    <li
      ref={composeRefs(innerRef, ref)}
      className={classNames}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role='menuitem'
      aria-disabled={disabled ? true : undefined}
      {...rest}
    >
      {children}
    </li>
  )
}

DropdownItem.defaultProps = {
  disabled: false,
  type: 'normal',
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
    '&:first-of-type a': {
      borderTopLeftRadius: theme.radius.popper,
      borderTopRightRadius: theme.radius.popper,
    },
    '&:last-of-type a': {
      borderBottomLeftRadius: theme.radius.popper,
      borderBottomRightRadius: theme.radius.popper,
    },
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
