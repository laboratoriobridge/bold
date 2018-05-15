import * as React from 'react'

import { TableBody, TableCell, TableRow } from '../Table'

import { DataTableProps } from './DataTable'
import { TableLoadingRow } from './TableLoadingRow'
import { TablePlaceholderRow } from './TablePlaceholderRow'

export interface TableFilledBodyProps extends Pick<DataTableProps, 'columns' | 'rows' | 'loading'> {

}

export class TableFilledBody extends React.PureComponent<TableFilledBodyProps> {
    render() {
        const { columns, rows, loading } = this.props

        return (
            <TableBody>
                {loading &&
                    <TableLoadingRow colSpan={columns.length} />}

                {!loading && this.isEmpty() &&
                    <TablePlaceholderRow colSpan={columns.length} />}

                {rows.map((row, idx) => (
                    <TableRow key={idx}>
                        {columns.map((col, colIdx) => (
                            <TableCell key={colIdx} styles={col.styles}>
                                {col.render(row)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        )
    }

    private isEmpty = () => !this.props.rows || this.props.rows.length === 0
}
