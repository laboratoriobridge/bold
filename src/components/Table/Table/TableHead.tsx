import React from 'react'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'

import { createTableStyles } from './styles'

export interface TableHeadProps extends Omit<React.HTMLAttributes<any>, 'style'> {
  style?: ExternalStyles
}

export function TableHead(props: TableHeadProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  return <thead className={css(classes.thead, style)} {...rest} />
}
