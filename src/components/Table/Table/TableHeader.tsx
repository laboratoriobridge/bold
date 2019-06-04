import React from 'react'

import { ExternalStyles, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'
import { SortableLabel, SortDirection } from '../SortableLabel/SortableLabel'

import { createTableStyles } from './styles'

export interface TableHeaderProps extends Omit<React.ThHTMLAttributes<any>, 'style'> {
  sortable?: boolean
  sortDirection?: SortDirection
  style?: ExternalStyles
  onSortChange?(direction: SortDirection, shiftKey?: boolean): any
}

export function TableHeader(props: TableHeaderProps) {
  const { sortable, sortDirection, onSortChange, style, ...rest } = props
  const { classes, css } = useStyles(createTableStyles)

  if (!sortable) {
    return <th className={css(classes.th, style)} {...rest} />
  }

  return (
    <th className={css(classes.th, style)} {...rest}>
      <SortableLabel direction={sortDirection} onChange={onSortChange}>
        {props.children}
      </SortableLabel>
    </th>
  )
}

TableHeader.defaultProps = {
  sortable: false,
  sortDirection: '',
  onSortChange: () => null,
} as Partial<TableHeaderProps>
