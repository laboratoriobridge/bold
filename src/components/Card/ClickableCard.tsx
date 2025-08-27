import React, { ComponentProps } from 'react'
import { ExternalStyles, useCss } from '../../styles'
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
   * Specify whether the Card should have a error appearance
   */
  invalid?: boolean

  /**
   * Specify whether the Card should be disabled
   */
  disabled?: boolean
}

export function ClickableCard(props: ClickableCardProps) {
  const { variant = 'outline', children, invalid, disabled, selected, style, ...buttonProps } = props

  const { theme, css } = useCss()

  const baseStyles = createBaseStyles(theme)
  const variantStyles = createVariantStyles(theme)[variant]
  const clickableStyles = createClickableStyles(theme)

  const classes = css(
    baseStyles.card,
    variantStyles.base,
    clickableStyles,
    invalid && variantStyles.invalid,
    disabled && baseStyles.cardDisabled,
    disabled && variantStyles.disabled,
    style
  )

  return (
    <button
      type='button'
      className={classes}
      disabled={disabled}
      data-variant={variant}
      data-selected={selected}
      data-invalid={invalid}
      aria-pressed={selected}
      {...buttonProps}
    >
      <div className={css(disabled && baseStyles.innerDisabled)}>{children}</div>
    </button>
  )
}
