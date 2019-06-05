import React from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { OuterShadows } from '../../styles/theme/createShadows'
import { Omit } from '../../util'

export interface PaperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  elevation?: keyof OuterShadows
  style?: ExternalStyles
}

export function Paper(props: PaperProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <div className={css(classes.paper, style)} {...rest} />
}

export const createStyles = (theme: Theme, { elevation }: PaperProps) => ({
  paper: {
    border: '1px solid ' + theme.pallete.gray.c80,
    borderRadius: theme.radius.paper,
    boxShadow: theme.shadows.outer[elevation],
  },
})
