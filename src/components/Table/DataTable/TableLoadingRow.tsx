import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Spinner } from '../../Spinner'
import { TableCell, TableRow } from '../Table'

export interface TableLoadingRowProps {
  colSpan: number
  message?: string
}

export function TableLoadingRow(props: TableLoadingRowProps) {
  const { colSpan, message } = props
  const { classes } = useStyles(createStyles)

  return (
    <TableRow>
      <TableCell colSpan={colSpan} style={classes.cell}>
        <div className={classes.container}>
          <Spinner />
          {message}
        </div>
      </TableCell>
    </TableRow>
  )
}

TableLoadingRow.defaultProps = {
  message: 'Carregando resultados',
} as Partial<TableLoadingRowProps>

const createStyles = (theme: Theme) => ({
  cell: {
    background: theme.pallete.surface.background,
    color: theme.pallete.primary.main,
    fontWeight: 'bold',
  } as CSSProperties,
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *:first-of-type': {
      marginRight: '0.5rem',
    },
  } as CSSProperties,
})
