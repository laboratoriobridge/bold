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
}

export const Grid = (props: GridProps) => {
  const { style, wrap, alignItems, justifyContent, direction, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  const className = css(classes.grid, wrap && classes.wrap, style)

  return <div className={className} {...rest} />
}

export const createStyles = (theme: Theme, props: GridProps) => ({
  grid: {
    alignItems: props.alignItems,
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: props.justifyContent,
    marginLeft: '-1rem',
    marginRight: '-1rem',
    height: '100%',

    [theme.breakpoints.down('small')]: {
      marginLeft: '-0.5rem',
      marginRight: '-0.5rem',
    },
  } as React.CSSProperties,
  wrap: {
    flexWrap: 'wrap',
  } as React.CSSProperties,
})
