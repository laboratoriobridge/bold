import React from 'react'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'

import { createTableStyles } from './styles'

export interface TableBodyProps extends Omit<React.HTMLAttributes<any>, 'style'> {
  style?: ExternalStyles
}

export function TableBody(props: TableBodyProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <tbody className={css(classes.tbody, style)} {...rest} />
}
