import React from 'react'

import { ExternalStyles, useCss } from '../../styles'
import { CardVariant, createBaseStyles, createVariantStyles } from './CardVariants'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles

  /**
   * Defines the visual style of the Card
   * @default 'outline'
   */
  variant?: CardVariant

  /**
   * Specify whether the Card should have error appearance
   */
  invalid?: boolean

  /**
   * Specify whether the Card should have disabled appearance
   */
  disabled?: boolean
}

export function Card(props: CardProps) {
  const { variant = 'outline', children, invalid, disabled, style, ...rest } = props

  const { theme, css } = useCss()

  const baseStyles = createBaseStyles(theme)
  const variantStyles = createVariantStyles(theme)[variant]

  return (
    <div
      className={css(
        baseStyles.card,
        variantStyles.base,
        invalid && variantStyles.invalid,
        disabled && baseStyles.cardDisabled,
        disabled && variantStyles.disabled,
        style
      )}
      {...rest}
    >
      <div className={css(disabled && baseStyles.innerDisabled)}>{children}</div>
    </div>
  )
}
