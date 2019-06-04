import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { TableCell, TableRow } from '../Table'

export interface TablePlaceholderRowProps {
  colSpan: number
  message?: string
}

export function TablePlaceholderRow(props: TablePlaceholderRowProps) {
  const { colSpan, message } = props
  const { classes } = useStyles(createStyles)

  return (
    <TableRow>
      <TableCell colSpan={colSpan} style={classes.cell}>
        {message}
      </TableCell>
    </TableRow>
  )
}

TablePlaceholderRow.defaultProps = {
  message: 'Nenhum registro encontrado',
} as Partial<TablePlaceholderRowProps>

export const createStyles = (theme: Theme) => ({
  cell: {
    color: theme.pallete.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  } as CSSProperties,
})
