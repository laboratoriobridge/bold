import React from 'react'

import { ExternalStyles, focusBoxShadow, hexToRGB, Theme, useStyles } from '../../styles'

export type CardVariant = 'elevated' | 'flat' | 'outline'

export interface CardProps {
  children?: React.ReactNode
  variant?: CardVariant
  selected?: boolean
  disabled?: boolean
  error?: React.ReactNode
  style?: ExternalStyles
  onClick?: () => void
}

export function Card(props: CardProps) {
  const { variant = 'outline', children, selected, disabled, error, style, onClick } = props

  const isClickable = !!onClick
  const isDisabled = disabled
  const isSelected = isClickable && selected
  const isInvalid = !!error

  const { theme, css } = useStyles()

  const baseStyles = createBaseStyles(theme)
  const variantStyle = createVariantStyles(theme)
  const clickableStyles = createClickableStyles(theme)

  const classes = css(baseStyles.card, variantStyle[variant], isClickable && clickableStyles, style)

  if (onClick) {
    return (
      <button
        className={classes}
        type='button'
        disabled={isDisabled}
        data-variant={variant}
        data-selected={isSelected}
        data-invalid={isInvalid}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return (
    <div className={classes} data-invalid={isInvalid}>
      {children}
    </div>
  )
}

const createBaseStyles = (theme: Theme) => ({
  card: {
    width: '100%',
    border: 0,
    borderRadius: `${theme.radius.popper}px`,
    padding: '1rem',
    transition: 'all .2s',
  } as ExternalStyles,
})

const createVariantStyles = (theme: Theme): { [key in CardVariant]: ExternalStyles } => ({
  elevated: {
    background: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.gray.c60}`,
    boxShadow: theme.shadows.outer[40],
    '&[data-invalid="true"]': {
      borderColor: theme.pallete.status.danger.main,
    },
  } as ExternalStyles,
  outline: {
    background: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.gray.c60}`,
    borderRadius: `${theme.radius.popper}px`,
    '&[data-invalid="true"]': {
      borderColor: theme.pallete.status.danger.main,
    },
  } as ExternalStyles,
  flat: {
    background: theme.pallete.surface.main,
    borderRadius: `${theme.radius.popper}px`,
    '&[data-invalid="true"]': {
      background: theme.pallete.status.danger.c90,
    },
  } as ExternalStyles,
})

const createClickableStyles = (theme: Theme): ExternalStyles => ({
  cursor: 'pointer',
  textAlign: 'left',
  ':not(:disabled):hover': {
    background: hexToRGB(theme.pallete.gray.c50, 0.1),
    '&[data-variant="elevated"]': {
      boxShadow: theme.shadows.outer[160],
    },
  },
  ':focus': {
    outline: 'none',
    boxShadow: focusBoxShadow(theme),
    '&[data-variant="elevated"]': {
      boxShadow: `${theme.shadows.outer[40]}, ${focusBoxShadow(theme)}`,
    },
  },
  ':not(:disabled):active': {
    boxShadow: theme.shadows.inner['10'],
    '&[data-variant="elevated"]': {
      boxShadow: `${theme.shadows.outer[40]}, ${theme.shadows.inner['10']}`,
    },
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    '& *': {
      pointerEvents: 'none',
    },
  },
  '&[data-selected="true"]': {
    background: theme.pallete.primary.c90,
    borderColor: theme.pallete.primary.main,
    ':not(:disabled):hover': {
      background: theme.pallete.primary.c90, // att color for hover?
    },
    '&[data-invalid="true"]': {
      background: theme.pallete.status.danger.c90,
    },
  },
  '&[data-invalid="true"]': {
    borderColor: theme.pallete.status.danger.main,
    ':not(:disabled):hover': {
      background: theme.pallete.status.danger.c90,
    },
    ':focus': {
      outline: 'none',
      boxShadow: focusBoxShadow(theme, 'danger'),
    },
    ':not(:disabled):active': {
      boxShadow: theme.shadows.inner['10'],
    },
  } as ExternalStyles,
})
