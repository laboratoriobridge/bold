import { Interpolation } from 'emotion'
import React, { CSSProperties, useContext } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

import { Grid, GridContext, GridProps } from './Grid'

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type CellSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface CellProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  size?: CellSize
  style?: Interpolation
  alignSelf?: AlignSelf
  flexGrow?: CSSProperties['flexGrow']
  flexShrink?: CSSProperties['flexShrink']
  flexBasis?: CSSProperties['flexBasis']
}

export function Cell(props: CellProps) {
  const { size, style, alignSelf, flexGrow, flexShrink, flexBasis, ...rest } = props
  const gridProps = useContext(GridContext) || Grid.defaultProps
  const { classes, css } = useStyles(createStyles, props, gridProps)

  const className = css(classes.cell, size && classes.fixedSize, style)

  return <div className={className} {...rest} />
}

export const createStyles = (
  theme: Theme,
  { alignSelf, flexBasis, flexGrow, flexShrink, size }: CellProps,
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

  fixedSize: {
    width: `calc((100% / 12 * ${size}) - ${gap}rem)`,
  },
})
