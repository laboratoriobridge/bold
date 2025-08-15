import React from 'react'

import { ExternalStyles, useCss } from '../../styles'
import { CardVariant, createBaseStyles, createVariantStyles } from './CardVariants'

export interface CardProps {
  children?: React.ReactNode
  style?: ExternalStyles

  /**
   * Defines the visual style of the Card
   * @default 'outline'
   */
  variant?: CardVariant

  /**
   * Specify whether the Card should have a error appearance
   */
  error?: React.ReactNode

  /**
   * Specify whether the Card should have a disabled appearance
   */
  disabled?: boolean
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
