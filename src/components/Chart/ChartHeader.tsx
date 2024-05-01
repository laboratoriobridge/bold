import React from 'react'

import { Cell, Grid } from '../Grid'
import { Heading } from '../Heading'
import { Theme, useStyles } from '../../styles'
import { ChartRangeSelector } from './selector'
import { AxisDomain, RangeSelectorOptions } from './model'

export interface ChartHeaderProps<XDomain> {
  title?: string
  rangeSelector?: RangeSelectorOptions
  onRangeChange?: (newRange: Partial<AxisDomain>) => void
}

export function ChartHeader<XDomain>(props: ChartHeaderProps<XDomain>) {
  const { title, rangeSelector, onRangeChange } = props
  const { classes } = useStyles(createStyles)

  if (!title && !rangeSelector) return null

  return (
    <Grid className={classes.header}>
      {title && (
        <Cell flexGrow={1}>
          <Heading level={3}>{title}</Heading>
        </Cell>
      )}
      {rangeSelector && (
        <Cell flexGrow={1}>
          <ChartRangeSelector {...rangeSelector} onChange={onRangeChange} />
        </Cell>
      )}
    </Grid>
  )
}

const createStyles = (theme: Theme) => ({
  header: {
    borderBottom: `1px solid ${theme.pallete.divider}`,
    padding: '0.5rem',
    display: 'flex',
    h3: {
      margin: 0,
      display: 'inline-block',
    },
  },
})
