import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface VFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  vSpacing?: number
  style?: ExternalStyles
}

export function VFlow(props: VFlowProps) {
  const { vSpacing, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <div className={css(classes.container, style)} {...rest} />
}

VFlow.defaultProps = {
  vSpacing: 1,
} as VFlowProps

const createStyles = (_: Theme, { vSpacing }: VFlowProps) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      display: 'inline-block',
      marginBottom: `${vSpacing / 2}rem`,
      marginTop: `${vSpacing / 2}rem`,
    },
    '& > :first-child': {
      marginTop: 0,
    },
    '& > :last-child': {
      marginBottom: 0,
    },
    '& > *:empty': {
      display: 'none',
    },
  } as CSSProperties,
})
