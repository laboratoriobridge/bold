import { Interpolation } from 'emotion'
import React from 'react'

import { useStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableProps extends WithStylesProps, Omit<React.TableHTMLAttributes<any>, 'style'> {
  hovered?: boolean
  style?: Interpolation
}

export const Table = (props: TableProps) => {
  const { hovered, style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <table className={css(classes.table, hovered && classes.tableHover, style)} {...rest} />
}
