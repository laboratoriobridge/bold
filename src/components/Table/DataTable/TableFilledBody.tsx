import React from 'react'

import { useCss } from '../../../styles'
import { TableBody, TableCell, TableRow } from '../Table'

import { DataTableProps, defaultColumnStyles } from './DataTable'
import { TableLoadingRow } from './TableLoadingRow'
import { TablePlaceholderRow } from './TablePlaceholderRow'

export interface TableFilledBodyProps extends Pick<DataTableProps, 'columns' | 'rows' | 'loading' | 'onRowClick'> {}

export function TableFilledBody(props: TableFilledBodyProps) {
  const { columns, rows, loading, onRowClick } = props
  const { css } = useCss()

  const handleClick = row => e => onRowClick(row)

  const isEmpty = () => !rows || rows.length === 0

  return (
    <TableBody>
      {loading && <TableLoadingRow colSpan={columns.length} />}

      {!loading && isEmpty() && <TablePlaceholderRow colSpan={columns.length} />}

      {rows.map((row, idx) => (
        <TableRow key={idx} onClick={onRowClick && handleClick(row)}>
          {columns.map((col, colIdx) => (
            <TableCell key={colIdx} style={css(defaultColumnStyles(col), col.style)}>
              {col.render(row)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
