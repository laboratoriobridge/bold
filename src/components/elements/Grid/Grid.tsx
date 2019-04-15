import { Interpolation } from 'emotion'
import React from 'react'

import { useBreakpoint } from '../../../hooks/useBreakpoint'
import { Breakpoint, Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type GridGap = number | { [key in Breakpoint]?: number }

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
  gap?: GridGap

  /**
   * Spacing between grid items on the grid cross axis.
   * The grid cross axis is vertical if flex-direction is row/row-reverse or horizontal othersize.
   */
  gapCrossAxis?: GridGap
}

export interface GridContextType {
  direction: GridProps['direction']
  gap: number
  gapCrossAxis: number
}

export const GridContext = React.createContext<GridContextType>(null)

export function Grid(props: GridProps) {
  const { style, wrap, alignItems, justifyContent, direction, gap, gapCrossAxis, ...rest } = props

  const contextValue = createGridContext(props, useBreakpoint())

  const { classes, css } = useStyles(createStyles, props, contextValue)
  const className = css(classes.grid, wrap && classes.wrap, style)

  return (
    <GridContext.Provider value={contextValue}>
      <div className={className} {...rest} />
    </GridContext.Provider>
  )
}

Grid.defaultProps = {
  gap: {
    xs: 1,
    lg: 2,
  },
  gapCrossAxis: 1,
} as Partial<GridProps>

export const augmentGapMap = (gaps: { [key in Breakpoint]?: number }) => ({
  xs: gaps.xs,
  sm: gaps.sm || gaps.xs,
  md: gaps.md || gaps.sm || gaps.xs,
  lg: gaps.lg || gaps.md || gaps.sm || gaps.xs,
  xl: gaps.xl || gaps.lg || gaps.md || gaps.sm || gaps.xs,
})

export const createGridContext = (
  { direction, gap, gapCrossAxis }: GridProps,
  breakpoint: Breakpoint
): GridContextType => ({
  direction,
  gap: typeof gap === 'number' ? gap : augmentGapMap(gap)[breakpoint],
  gapCrossAxis: typeof gapCrossAxis === 'number' ? gapCrossAxis : augmentGapMap(gapCrossAxis)[breakpoint],
})

export const createStyles = (
  theme: Theme,
  { direction, alignItems, justifyContent }: GridProps,
  { gap, gapCrossAxis }: GridContextType
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
