import React, { CSSProperties } from 'react'

import { AlignItems, JustifyContent } from '../Grid'
import { ExternalStyles, Theme, useStyles } from '../../styles'

export type FlowDirection = 'horizontal' | 'vertical'
export type JustifyItems = 'start' | 'center' | 'end' | 'stretch'

export interface FlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  direction: FlowDirection
  gap?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  justifyItems?: JustifyItems
  style?: ExternalStyles
}

export function Flow(props: FlowProps) {
  const { direction, gap = 1, alignItems, justifyContent, justifyItems = 'start', style, ...rest } = props
  const { classes, css } = useStyles(createStyles, { direction, gap, alignItems, justifyContent, justifyItems })

  return <div className={css(classes.container, style)} {...rest} />
}

const createStyles = (_theme: Theme, { direction, gap, alignItems, justifyContent, justifyItems }: FlowProps) => ({
  container: {
    display: 'grid',
    gridAutoFlow: direction === 'horizontal' ? 'column' : 'row',
    gridAutoColumns: direction === 'horizontal' ? 'minmax(min-content, max-content)' : undefined,
    gridAutoRows: direction === 'vertical' ? 'minmax(min-content, max-content)' : undefined,
    justifyItems,
    gap: `${gap}rem`,
    alignItems,
    justifyContent,
  } as CSSProperties,
})
