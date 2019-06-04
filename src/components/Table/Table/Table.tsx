import React from 'react'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'

import { createTableStyles } from './styles'

export interface TableProps extends Omit<React.TableHTMLAttributes<any>, 'style'> {
  hovered?: boolean
  style?: ExternalStyles
}

export function Table(props: TableProps) {
  const { hovered, style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <table className={css(classes.table, hovered && classes.tableHover, style)} {...rest} />
}
