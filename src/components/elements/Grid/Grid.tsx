import { Interpolation } from 'emotion'
import React from 'react'

import { Breakpoint, Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type GridResponsiveGap = { [key in Breakpoint]?: number }
export type GridGap = number | GridResponsiveGap

export interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  wrap?: boolean
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  direction?: Direction
  style?: Interpolation

  /**
   * Spacing (in `rem`) between grid items on the horizontal axis.
   */
  gap?: GridGap

  /**
   * Spacing (in `rem`) between grid items on the vertical axis.
   */
  gapVertical?: GridGap
}

export const GridContext = React.createContext<GridProps>(null)

export function Grid(props: GridProps) {
  const { style, wrap, alignItems, justifyContent, direction, gap, gapVertical, ...rest } = props

  const { classes, css } = useStyles(createStyles, props)

  const className = css(classes.grid, wrap && classes.wrap, style)

  return (
    <GridContext.Provider value={props}>
      <div className={className} {...rest} />
    </GridContext.Provider>
  )
}

Grid.defaultProps = {
  gap: {
    xs: 1,
    lg: 2,
  },
  gapVertical: 1,
} as Partial<GridProps>

export const createStyles = (theme: Theme, { direction, alignItems, justifyContent }: GridProps) => ({
  grid: {
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
  } as React.CSSProperties,
  wrap: {
    flexWrap: 'wrap',
  } as React.CSSProperties,
})
