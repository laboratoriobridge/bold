import React, { CSSProperties, Ref } from 'react'

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

export const Flow = React.forwardRef((props: FlowProps, ref: Ref<HTMLDivElement>) => {
  const { direction, gap = 1, alignItems, justifyContent, justifyItems = 'stretch', style, ...rest } = props
  const { classes, css } = useStyles(createStyles, direction, gap, alignItems, justifyContent, justifyItems)

  return <div className={css(classes.container, style)} ref={ref} {...rest} />
})

const createStyles = (
  _theme: Theme,
  direction: FlowDirection,
  gap: number,
  alignItems: AlignItems,
  justifyContent: JustifyContent,
  justifyItems: JustifyItems
) => ({
  container: {
    display: 'grid',
    gridAutoFlow: direction === 'horizontal' ? 'column' : 'row',
    // No fluxo vertical a coluna implícita precisa preencher a largura do container (igual ao
    // comportamento antigo de flex-column); sem isso ela seria dimensionada pelo conteúdo e os
    // filhos não esticariam, exigindo `width: 100%` manual em cada uso.
    gridAutoColumns: direction === 'horizontal' ? 'minmax(min-content, max-content)' : 'minmax(0, 1fr)',
    gridAutoRows: direction === 'vertical' ? 'minmax(min-content, max-content)' : undefined,
    gap: `${gap}rem`,
    alignItems,
    justifyContent,
    justifyItems,
  } as CSSProperties,
})
