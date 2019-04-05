import { Interpolation } from 'emotion'
import React, { CSSProperties, useContext } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

import { Grid, GridContext, GridProps } from './Grid'

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type CellSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface CellProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: Interpolation
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
  const { classes, css } = useStyles(createStyles, props, gridProps)

  const className = css(
    classes.cell,
    (xs || size) && classes.xs,
    sm && classes.sm,
    md && classes.md,
    lg && classes.lg,
    xl && classes.xl,
    style
  )

  return <div className={className} {...rest} />
}

export const createStyles = (
  theme: Theme,
  { alignSelf, flexBasis, flexGrow, flexShrink, size, xs, sm, md, lg, xl }: CellProps,
  { gap, gapCrossAxis, direction }: GridProps
) => ({
  cell: {
    margin: ['column', 'column-reverse'].includes(direction)
      ? `${gap / 2}rem ${gapCrossAxis / 2}rem`
      : `${gapCrossAxis / 2}rem ${gap / 2}rem`,
    alignSelf,
    flexBasis,
    flexGrow,
    flexShrink,
  } as React.CSSProperties,

  xs: {
    width: `calc((100% / 12 * ${xs || size}) - ${gap}rem)`,
  },
  sm: {
    [theme.breakpoints.up('sm')]: {
      width: `calc((100% / 12 * ${sm}) - ${gap}rem)`,
    },
  },
  md: {
    [theme.breakpoints.up('md')]: {
      width: `calc((100% / 12 * ${md}) - ${gap}rem)`,
    },
  },
  lg: {
    [theme.breakpoints.up('lg')]: {
      width: `calc((100% / 12 * ${lg}) - ${gap}rem)`,
    },
  },
  xl: {
    [theme.breakpoints.up('xl')]: {
      width: `calc((100% / 12 * ${xl}) - ${gap}rem)`,
    },
  },
})
