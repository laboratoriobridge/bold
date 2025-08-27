import React from 'react'

import { css } from 'emotion'
import { ExternalStyles, Theme, useTheme } from '../../styles'
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

  const theme = useTheme()
  const styles = createStyles(theme, variant, disabled, invalid, style)

  return (
    <div className={styles.card} {...rest}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}

const createStyles = (
  theme: Theme,
  variant: CardVariant,
  disabled: boolean,
  invalid: boolean,
  externalStyles: ExternalStyles
) => {
  const baseStyles = createBaseStyles(theme)
  const variantStyles = createVariantStyles(theme)[variant]

  return {
    card: css(
      baseStyles.card,
      variantStyles.base,
      invalid && variantStyles.invalid,
      disabled && baseStyles.cardDisabled,
      disabled && variantStyles.disabled,
      externalStyles
    ),
    inner: css(disabled && baseStyles.innerDisabled),
  }
}
