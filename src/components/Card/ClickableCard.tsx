import React, { ComponentProps } from 'react'
import { ExternalStyles, useCss } from '../../styles'
import { CardVariant, createBaseStyles, createClickableStyles, createVariantStyles } from './CardVariants'

export interface ClickableCardProps extends Omit<ComponentProps<'button'>, 'style' | 'children'> {
  variant?: CardVariant
  children?: React.ReactNode
  selected?: boolean
  error?: React.ReactNode
  disabled?: boolean
  style?: ExternalStyles
}

export function ClickableCard(props: ClickableCardProps) {
  const { variant, children, error, disabled, selected, style, ...buttonProps } = props

  const { theme, css } = useCss()

  const baseStyles = createBaseStyles(theme)
  const variantStyle = createVariantStyles(theme)
  const clickableStyles = createClickableStyles(theme)

  const isInvalid = !!error

  const classes = css(
    baseStyles.card,
    variantStyle[variant],
    clickableStyles,
    disabled && baseStyles.cardDisabled,
    style
  )

  return (
    <button
      type='button'
      className={classes}
      disabled={disabled}
      data-variant={variant}
      data-selected={selected}
      data-invalid={isInvalid}
      {...buttonProps}
    >
      <div className={css(disabled && baseStyles.innerDisabled)}>{children}</div>
    </button>
  )
}
