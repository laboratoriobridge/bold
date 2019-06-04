import React, { CSSProperties } from 'react'

import { ExternalStyles, TextColor, useStyles } from '../../styles'
import { getTextColor, Theme } from '../../styles/theme/createTheme'
import { Omit } from '../../util'

export type ProgressType = TextColor

export interface ProgressProps extends Omit<React.ProgressHTMLAttributes<HTMLProgressElement>, 'style'> {
  type?: ProgressType
  style?: ExternalStyles
}

export function Progress(props: ProgressProps) {
  const { style, type, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <progress className={css(classes.progress, style)} {...rest} />
}

Progress.defaultProps = {
  type: 'primary',
  max: 100,
} as Partial<ProgressProps>

export const createStyles = (theme: Theme, { type }: ProgressProps) => ({
  progress: {
    appearance: 'none',
    border: 'none',
    height: 4,
    width: '100%',
    '&::-webkit-progress-bar': {
      backgroundColor: theme.pallete.gray.c90,
      borderRadius: 4,
    },
    '&::-webkit-progress-value': {
      backgroundColor: getTextColor(theme, type),
      borderRadius: 4,
      transition: 'all .3s',
    },
    '&::-moz-progress-bar': {
      backgroundColor: getTextColor(theme, type),
      borderRadius: 4,
      transition: 'all .3s',
    },
  } as CSSProperties,
})
