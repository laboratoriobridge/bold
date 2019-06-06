import React from 'react'

import { Breakpoint, ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

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
  style?: ExternalStyles

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
  const { classes: gapClasses } = useStyles(createGapStyles, props)
  const { classes: gapVerticalClasses } = useStyles(createGapVerticalStyles, props)

  const className = css(
    classes.grid,
    wrap && classes.wrap,
    typeof gap === 'object' && [
      gap.xs && gapClasses.xs,
      gap.sm && gapClasses.sm,
      gap.md && gapClasses.md,
      gap.lg && gapClasses.lg,
      gap.xl && gapClasses.xl,
    ],
    typeof gapVertical === 'object' && [
      gapVertical.xs && gapVerticalClasses.xs,
      gapVertical.sm && gapVerticalClasses.sm,
      gapVertical.md && gapVerticalClasses.md,
      gapVertical.lg && gapVerticalClasses.lg,
      gapVertical.xl && gapVerticalClasses.xl,
    ],
    style
  )

  return (
    <GridContext.Provider value={props}>
      <div className={className} {...rest} />
    </GridContext.Provider>
  )
}

Grid.defaultProps = {
  gap: 2,
  gapVertical: 1,
  wrap: true,
} as Partial<GridProps>

export const createStyles = (theme: Theme, { direction, alignItems, justifyContent, gap, gapVertical }: GridProps) => ({
  grid: {
    display: 'flex',
    flexDirection: direction,
    alignItems,
    justifyContent,
    marginLeft: typeof gap === 'number' && `${-gap / 2}rem`,
    marginRight: typeof gap === 'number' && `${-gap / 2}rem`,
    marginTop: typeof gapVertical === 'number' && `${-gapVertical / 2}rem`,
    marginBottom: typeof gapVertical === 'number' && `${-gapVertical / 2}rem`,
  } as React.CSSProperties,
  wrap: {
    flexWrap: 'wrap',
  } as React.CSSProperties,
})

export const createGapStyles = (theme: Theme, { gap }: { gap: GridResponsiveGap }) => ({
  xs: {
    marginLeft: `${-gap.xs / 2}rem`,
    marginRight: `${-gap.xs / 2}rem`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: `${-gap.sm / 2}rem`,
      marginRight: `${-gap.sm / 2}rem`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      marginLeft: `${-gap.md / 2}rem`,
      marginRight: `${-gap.md / 2}rem`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: `${-gap.lg / 2}rem`,
      marginRight: `${-gap.lg / 2}rem`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      marginLeft: `${-gap.xl / 2}rem`,
      marginRight: `${-gap.xl / 2}rem`,
    },
  },
})

export const createGapVerticalStyles = (theme: Theme, { gapVertical }: { gapVertical: GridResponsiveGap }) => ({
  xs: {
    marginTop: `${-gapVertical.xs / 2}rem`,
    marginBottom: `${-gapVertical.xs / 2}rem`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      marginTop: `${-gapVertical.sm / 2}rem`,
      marginBottom: `${-gapVertical.sm / 2}rem`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      marginTop: `${-gapVertical.md / 2}rem`,
      marginBottom: `${-gapVertical.md / 2}rem`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      marginTop: `${-gapVertical.lg / 2}rem`,
      marginBottom: `${-gapVertical.lg / 2}rem`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      marginTop: `${-gapVertical.xl / 2}rem`,
      marginBottom: `${-gapVertical.xl / 2}rem`,
    },
  },
})
