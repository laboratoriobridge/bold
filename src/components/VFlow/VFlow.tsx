import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Flow } from '../Flow'

export interface VFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  vSpacing?: number
  style?: ExternalStyles
}

export function VFlow(props: VFlowProps) {
  const { vSpacing, children, ...rest } = props
  const { classes } = useStyles(createStyles)

  // Mantém o wrapper por filho (container > div > filho) para preservar retrocompatibilidade:
  // muitos consumidores estilizam o nível interno do VFlow via seletores como `& > div > *`.
  // O espaçamento e o stretch ficam por conta do Flow (grid + gap).
  return (
    <Flow direction='vertical' gap={vSpacing} {...rest}>
      {React.Children.map(children, (child) => child && <div className={classes.childWrapper}>{child}</div>)}
    </Flow>
  )
}

const createStyles = (_theme: Theme) => ({
  childWrapper: {
    ':empty': {
      display: 'none',
    },
  } as CSSProperties,
})
