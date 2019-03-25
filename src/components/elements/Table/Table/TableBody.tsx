import { Interpolation } from 'emotion'
import React from 'react'

import { useStyles } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableBodyProps extends Omit<React.HTMLAttributes<any>, 'style'> {
  style?: Interpolation
}

export function TableBody(props: TableBodyProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <tbody className={css(classes.tbody, style)} {...rest} />
}
