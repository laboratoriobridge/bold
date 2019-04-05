import { Interpolation } from 'emotion'
import React from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  wrap?: boolean
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  direction?: Direction
  style?: Interpolation

  /**
   * Spacing between grid items on the grid main axis.
   * The grid main axis is horizontal if flex-direction is row/row-reverse or vertical otherwise.
   */
  gap?: number

  /**
   * Spacing between grid items on the grid cross axis.
   * The grid cross axis is vertical if flex-direction is row/row-reverse or horizontal othersize.
   */
  gapCrossAxis?: number
}

export const GridContext = React.createContext<GridProps>(null)

export function Grid(props: GridProps) {
  const { style, wrap, alignItems, justifyContent, direction, gap, gapCrossAxis, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  const className = css(classes.grid, wrap && classes.wrap, style)

  return (
    <GridContext.Provider value={props}>
      <div className={className} {...rest} />
    </GridContext.Provider>
  )
}

Grid.defaultProps = {
  gap: 2,
  gapCrossAxis: 1,
} as Partial<GridProps>

export const createStyles = (
  theme: Theme,
  { gap, gapCrossAxis, direction, alignItems, justifyContent }: GridProps
) => ({
  grid: {
    display: 'flex',
    margin: ['column', 'column-reverse'].includes(direction)
      ? `${-gap / 2}rem ${-gapCrossAxis / 2}rem `
      : `${-gapCrossAxis / 2}rem ${-gap / 2}rem `,
    flexDirection: direction,
    alignItems,
    justifyContent,
  } as React.CSSProperties,
  wrap: {
    flexWrap: 'wrap',
  } as React.CSSProperties,
})
