import React, { CSSProperties } from 'react'

import { useLocale } from '../../../i18n'
import { ExternalStyles, Theme, useStyles } from '../../../styles'
import Times from '../../Icon/generated/TimesDefault'

export interface SelectMultiItemProps {
  style?: ExternalStyles
  disabled?: boolean
  children?: React.ReactNode
  onRemove(e: React.MouseEvent<HTMLSpanElement>): void
}

export function SelectMultiItem(props: SelectMultiItemProps) {
  const { style, children, onRemove, disabled, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)
  const locale = useLocale()

  return (
    <span className={css(classes.root, style)} {...rest}>
      <span className={classes.text}>{children}</span>
      {!disabled && (
        <span className={classes.button} onClick={onRemove} title={locale.select.removeItem}>
          <Times />
        </span>
      )}
    </span>
  )
}

export const createStyles = (theme: Theme, { disabled }: SelectMultiItemProps) => ({
  root: {
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: theme.radius.button,
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'bold',
  } as CSSProperties,
  text: {
    padding: disabled ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.125rem - 1px) 0.25rem',
  } as CSSProperties,
  button: {
    background: theme.pallete.surface.background,
    cursor: 'pointer',
    fontSize: '1.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    padding: 'calc(0.125rem - 1px) 0',
    '&:hover': {
      color: theme.pallete.status.danger.main,
    },
    svg: {
      fill: 'currentColor',
    },
  } as CSSProperties,
})
