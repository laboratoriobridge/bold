import { Interpolation } from 'emotion'
import React from 'react'

import { TextColor, useCss } from '../../../../styles'
import { getTextColor } from '../../../../styles/theme/createTheme'
import { Omit } from '../../../../util/types'

export interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'style'> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  color?: TextColor
  style?: Interpolation
}

export const Heading = (props: HeadingProps) => {
  const { level, children, style, color, ...rest } = props
  const { theme, css } = useCss()
  const styles = {
    color: color && getTextColor(theme, color),
  }

  return React.createElement(
    `h${level}`,
    {
      ...rest,
      className: css(styles, style),
    },
    children
  )
}

Heading.defaultProps = {} as Partial<HeadingProps>
