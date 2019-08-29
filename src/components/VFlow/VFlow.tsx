import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { AlignItems, JustifyContent } from '../Grid'

export interface VFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  vSpacing?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  style?: ExternalStyles
}

export function VFlow(props: VFlowProps) {
  const { vSpacing, alignItems, justifyContent, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <div className={css(classes.container, style)} {...rest} />
}

VFlow.defaultProps = {
  vSpacing: 1,
} as VFlowProps

const createStyles = (theme: Theme, { vSpacing, alignItems, justifyContent }: VFlowProps) => ({
  container: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridGap: vSpacing ? `${vSpacing}rem` : undefined,
    alignItems,
    justifyContent,
  } as CSSProperties,
})
