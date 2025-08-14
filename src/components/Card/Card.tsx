import React from 'react'

import { ExternalStyles, useCss } from '../../styles'
import { CardVariant, createBaseStyles, createVariantStyles } from './CardVariants'

export interface CardProps {
  variant?: CardVariant
  children?: React.ReactNode
  error?: React.ReactNode
  disabled?: boolean
  style?: ExternalStyles
}

export function Card(props: CardProps) {
  const { variant = 'outline', children, error, disabled, style } = props

  const { theme, css } = useCss()

  const baseStyles = createBaseStyles(theme)
  const variantStyle = createVariantStyles(theme)

  const isInvalid = !!error

  return (
    <div
      className={css(baseStyles.card, variantStyle[variant], disabled && baseStyles.cardDisabled, style)}
      data-invalid={isInvalid}
      data-disabled={disabled}
    >
      <div className={css(disabled && baseStyles.innerDisabled)}>{children}</div>
    </div>
  )
}
