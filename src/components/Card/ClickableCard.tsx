import React, { ComponentProps } from 'react'
import { css } from 'emotion'
import { ExternalStyles, Theme, useTheme } from '../../styles'
import { CardVariant, createBaseStyles, createClickableStyles, createVariantStyles } from './CardVariants'

export interface ClickableCardProps extends Omit<ComponentProps<'button'>, 'style'> {
  style?: ExternalStyles

  /**
   * Defines the visual style of the Card
   * @default 'outline'
   */
  variant?: CardVariant

  /**
   * Specify whether the Card should be selected
   */
  selected?: boolean

  /**
   * Specify whether the Card should have error appearance
   */
  invalid?: boolean

  /**
   * Specify whether the Card should be disabled
   */
  disabled?: boolean
}

export function ClickableCard(props: ClickableCardProps) {
  const { variant = 'outline', children, invalid, disabled, selected, style, ...buttonProps } = props

  const theme = useTheme()
  const styles = createStyles(theme, variant, disabled, invalid, style)

  return (
    <button
      type='button'
      className={styles.card}
      disabled={disabled}
      data-variant={variant}
      data-selected={selected}
      data-invalid={invalid}
      aria-pressed={selected}
      {...buttonProps}
    >
      <div className={styles.inner}>{children}</div>
    </button>
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
  const clickableStyles = createClickableStyles(theme)

  return {
    card: css(
      baseStyles.card,
      variantStyles.base,
      clickableStyles,
      invalid && variantStyles.invalid,
      disabled && baseStyles.cardDisabled,
      disabled && variantStyles.disabled,
      externalStyles
    ),
    inner: css(disabled && baseStyles.innerDisabled),
  }
}
