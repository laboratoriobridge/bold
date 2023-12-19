import React from 'react'

import { ExternalStyles, TextColor, useStyles } from '../../styles'
import { getTextColor, Theme } from '../../styles/theme/createTheme'
import { Omit } from '../../util/types'

import { IconMap, Icons } from './generated/types'

export type IconColor = TextColor | 'none'
export type IconImage = Icons | React.ComponentType<React.SVGProps<SVGSVGElement>>

export interface IconProps extends Omit<React.SVGAttributes<SVGElement>, 'style'> {
  icon: IconImage
  fill?: IconColor
  stroke?: IconColor
  size?: number
  style?: ExternalStyles
}

export const getIconColor = (theme: Theme, color: IconColor) => {
  return !color || color === 'none' ? color : getTextColor(theme, color)
}

export function Icon(props: IconProps) {
  const { style, icon, fill, stroke, size, ...rest } = props
  const SelectedIcon = typeof icon === 'string' ? IconMap[icon] : icon

  const { classes, css } = useStyles((theme) => ({
    icon: {
      fill: fill ? getIconColor(theme, fill) : 'currentColor',
      stroke: stroke && getIconColor(theme, stroke),
      fontSize: size && size + 'rem',
    },
  }))

  return (
    <SelectedIcon
      role='img'
      aria-hidden='true'
      height='1em'
      width='1em'
      className={css(classes.icon, style)}
      {...rest}
    />
  )
}

Icon.defaultProps = {
  size: 1.5,
} as Partial<IconProps>
