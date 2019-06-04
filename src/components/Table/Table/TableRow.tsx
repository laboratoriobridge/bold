import React from 'react'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'

import { createTableStyles } from './styles'

export interface TableRowProps extends Omit<React.HTMLAttributes<any>, 'style'> {
  style?: ExternalStyles
}

export function TableRow(props: TableRowProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <tr className={css(classes.row, props.onClick && classes.pointer, style)} {...rest} />
}
