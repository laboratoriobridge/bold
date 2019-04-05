import { Interpolation } from 'emotion'
import React from 'react'

import { useStyles } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableCellProps extends Omit<React.TdHTMLAttributes<any>, 'style'> {
  style?: Interpolation
}

export function TableCell(props: TableCellProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <td className={css(classes.cell, style)} {...rest} />
}
