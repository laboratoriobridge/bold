import * as React from 'react'

import { SortDirection } from '../SortableLabel/SortableLabel'
import { Table, TableHead, TableHeader, TableProps, TableRow } from '../Table'

import { TableFilledBody } from './TableFilledBody'

export interface SortMap { [key: string]: SortDirection }

export interface TableColumnConfig<T = any> {
    name: string
    header?: React.ReactNode
    sortable?: boolean
    styles?: any
    render(row: T): React.ReactNode
}

export interface DataTableProps<T = any> extends TableProps {
    rows: T[]
    columns: Array<TableColumnConfig<T>>
    loading?: boolean
    sort?: SortMap
    onSortChange?(sort: SortMap): void
}

export class DataTable<T = any> extends React.PureComponent<DataTableProps<T>> {
    static defaultProps: Partial<DataTableProps<any>> = {
        loading: false,
        sort: {},
        onSortChange: () => null,
    }

    render() {
        const { columns, rows, loading, onSortChange, sort, ...rest } = this.props

        return (
            <Table {...rest}>
                <TableHead>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHeader {...this.getHeaderProps(col)}>
                                {col.header}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableFilledBody rows={rows} columns={columns} loading={loading} />
            </Table>
        )
    }

    private getHeaderProps = (col: TableColumnConfig) => ({
        key: col.name,
        'data-name': col.name,
        sortable: col.sortable,
        sortDirection: this.props.sort[col.name],
        onSortChange: this.handleSortChange(col),
    })

    private handleSortChange = (col: TableColumnConfig) => (sortDirection: SortDirection) => {
        // TODO: allow multiple ordering (holding shift on press)
        this.props.onSortChange({
            [col.name]: sortDirection,
        })
    }
}
