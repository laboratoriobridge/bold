import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

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
  const { classes, css } = useStyles(createStyles, props)

  const className = css(classes.cell, size && classes.fixedSize, style)

  return <div className={className} {...rest} />
}

export const createStyles = (theme: Theme, props: CellProps) => ({
  cell: {
    margin: '0.5rem 1rem',
    alignSelf: props.alignSelf,
    flexBasis: props.flexBasis,
    flexGrow: props.flexGrow,
    flexShrink: props.flexShrink,

    [theme.breakpoints.down('small')]: {
      margin: '0.25rem 0.5rem',
    },
  } as React.CSSProperties,

  fixedSize: {
    width: `calc((100% / 12 * ${props.size}) - 2rem)`,

    [theme.breakpoints.down('small')]: {
      width: `calc((100% / 12 * ${props.size}) - 1rem)`,
    },
  },
})
