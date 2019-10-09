import { FontStyleProperty, FontWeightProperty, TextDecorationProperty } from 'csstype'
import React, { CSSProperties, HTMLAttributes } from 'react'

import { ExternalStyles, TextColor, useStyles } from '../../styles'
import { getTextColor, Theme } from '../../styles/theme/createTheme'
import { TypographyVariant } from '../../styles/theme/createTypography'
import { Omit } from '../../util'

export interface BaseTextProps {
  component?: React.ElementType
  variant?: TypographyVariant
  color?: TextColor
  fontSize?: number
  fontWeight?: FontWeightProperty
  fontStyle?: FontStyleProperty
  textDecoration?: TextDecorationProperty<string>
  style?: ExternalStyles
  [key: string]: any
}

export type TextProps = Omit<HTMLAttributes<HTMLElement>, 'style'> & BaseTextProps

export function Text<P = TextProps>(props: P & BaseTextProps) {
  const { component, variant, color, fontSize, fontWeight, fontStyle, textDecoration, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  const Cmp = component

  const className = css(
    classes.root,
    color && classes.color,
    fontSize && classes.fontSize,
    fontWeight && classes.fontWeight,
    fontStyle && classes.fontStyle,
    textDecoration && classes.textDecoration,
    style
  )

  return <Cmp className={className} {...rest} />
}

Text.defaultProps = {
  component: 'span',
  variant: 'main',
}

const createStyles = (
  theme: Theme,
  { variant, color, fontWeight, fontStyle, textDecoration, fontSize }: BaseTextProps
) => ({
  root: {
    ...theme.typography.variant(variant),
  } as CSSProperties,
  color: {
    color: color && getTextColor(theme, color),
  } as CSSProperties,
  fontSize: {
    fontSize: fontSize && `${fontSize}rem`,
  } as CSSProperties,
  fontWeight: {
    fontWeight,
  } as CSSProperties,
  fontStyle: {
    fontStyle,
  } as CSSProperties,
  textDecoration: {
    textDecoration,
  } as CSSProperties,
})
