import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { AlignItems, JustifyContent } from '../Grid'

export interface HFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  hSpacing?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  style?: ExternalStyles
}

export function HFlow(props: HFlowProps) {
  const { hSpacing, alignItems, justifyContent, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <div className={css(classes.container, style)} {...rest} />
}

HFlow.defaultProps = {
  hSpacing: 1,
} as HFlowProps

const createStyles = (theme: Theme, { hSpacing, alignItems, justifyContent }: HFlowProps) => ({
  container: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'minmax(min-content, max-content)',
    gridGap: hSpacing ? `${hSpacing}rem` : undefined,
    alignItems,
    justifyContent,
  } as CSSProperties,
})
