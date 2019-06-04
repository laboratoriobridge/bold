import React, { CSSProperties, useContext } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

import { Grid, GridContext, GridProps, GridResponsiveGap } from './Grid'

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type CellSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface CellProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
  alignSelf?: AlignSelf
  flexGrow?: CSSProperties['flexGrow']
  flexShrink?: CSSProperties['flexShrink']
  flexBasis?: CSSProperties['flexBasis']

  /**
   * Width of the cell, defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  size?: CellSize

  /**
   * Width to be used on extra-small (xs) or larger devices, based on breakpoints defined on theme.
   * The size is defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  xs?: CellSize

  /**
   * Width to be used on small (sm) or larger devices, based on breakpoints defined on theme.
   * The size is defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  sm?: CellSize

  /**
   * Width to be used on medium (md) or larger devices, based on breakpoints defined on theme.
   * The size is defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  md?: CellSize

  /**
   * Width to be used on large (lg) or larger devices, based on breakpoints defined on theme.
   * The size is defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  lg?: CellSize

  /**
   * Width to be used on extra-large (xl) or larger devices, based on breakpoints defined on theme.
   * The size is defined using a 12-column based grid (12 is 100%, 6 is 50%, 4 is 25%, etc.).
   */
  xl?: CellSize
}

export function Cell(props: CellProps) {
  const { size, style, alignSelf, flexGrow, flexShrink, flexBasis, xs, sm, md, lg, xl, ...rest } = props

  const gridProps = useContext(GridContext) || Grid.defaultProps
  const { gap, gapVertical } = gridProps

  const { classes, css } = useStyles(createStyles, props, gridProps)
  const { classes: sizeClasses } = useStyles(createSizeStyles, props, gridProps)
  const { classes: gapClasses } = useStyles(createGapStyles, gridProps)
  const { classes: gapVerticalClasses } = useStyles(createGapVerticalStyles, gridProps)

  const className = css(
    classes.cell,
    (xs || size) && sizeClasses.xs,
    sm && sizeClasses.sm,
    md && sizeClasses.md,
    lg && sizeClasses.lg,
    xl && sizeClasses.xl,
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

  return <div className={className} {...rest} />
}

export const createStyles = (
  theme: Theme,
  { alignSelf, flexBasis, flexGrow, flexShrink }: CellProps,
  { gap, gapVertical }: GridProps
) => ({
  cell: {
    alignSelf,
    flexBasis,
    flexGrow,
    flexShrink,
    paddingLeft: typeof gap === 'number' && `${gap / 2}rem`,
    paddingRight: typeof gap === 'number' && `${gap / 2}rem`,
    paddingTop: typeof gapVertical === 'number' && `${gapVertical / 2}rem`,
    paddingBottom: typeof gapVertical === 'number' && `${gapVertical / 2}rem`,
  } as React.CSSProperties,
})

export const createSizeStyles = (theme: Theme, { size, xs, sm, md, lg, xl }: CellProps) => ({
  xs: {
    width: `calc(100% / 12 * ${xs || size})`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% / 12 * ${sm})`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% / 12 * ${md})`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% / 12 * ${lg})`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% / 12 * ${xl})`,
    },
  },
})

export const createGapStyles = (theme: Theme, { gap }: { gap: GridResponsiveGap }) => ({
  xs: {
    paddingLeft: `${gap.xs / 2}rem`,
    paddingRight: `${gap.xs / 2}rem`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `${gap.sm / 2}rem`,
      paddingRight: `${gap.sm / 2}rem`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: `${gap.md / 2}rem`,
      paddingRight: `${gap.md / 2}rem`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: `${gap.lg / 2}rem`,
      paddingRight: `${gap.lg / 2}rem`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      paddingLeft: `${gap.xl / 2}rem`,
      paddingRight: `${gap.xl / 2}rem`,
    },
  },
})

export const createGapVerticalStyles = (theme: Theme, { gapVertical }: { gapVertical: GridResponsiveGap }) => ({
  xs: {
    paddingTop: `${gapVertical.xs / 2}rem`,
    paddingBottom: `${gapVertical.xs / 2}rem`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: `${gapVertical.sm / 2}rem`,
      paddingBottom: `${gapVertical.sm / 2}rem`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      paddingTop: `${gapVertical.md / 2}rem`,
      paddingBottom: `${gapVertical.md / 2}rem`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      paddingTop: `${gapVertical.lg / 2}rem`,
      paddingBottom: `${gapVertical.lg / 2}rem`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      paddingTop: `${gapVertical.xl / 2}rem`,
      paddingBottom: `${gapVertical.xl / 2}rem`,
    },
  },
})
