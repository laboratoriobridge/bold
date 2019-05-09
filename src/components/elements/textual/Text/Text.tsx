import React from 'react'

import { ExternalStyles, TextColor, useStyles } from '../../../../styles'
import { getTextColor } from '../../../../styles/theme/createTheme'
import { Omit } from '../../../../util'

export type Weight = 'normal' | 'bold'
export type TextTag = 'span' | 'p'
export type FontStyle = 'normal' | 'italic'

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  color?: TextColor
  size?: number
  weight?: Weight
  tag?: TextTag
  fontStyle?: FontStyle
  style?: ExternalStyles
  children: React.ReactNode
}

export function Text(props: TextProps) {
  const { tag, color, size, weight, fontStyle, style, ...rest } = props
  const { classes, css } = useStyles(theme => ({
    root: {
      color: color && getTextColor(theme, color),
      fontSize: size && size + 'rem',
      fontWeight: weight,
      fontStyle,
    },
  }))

  return React.createElement(
    tag,
    {
      className: css(classes[tag], classes.root, style),
      ...rest,
    },
    props.children
  )
}

Text.defaultProps = {
  tag: 'span',
} as Partial<TextProps>
