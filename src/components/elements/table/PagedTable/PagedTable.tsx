import * as React from 'react'

import { Page, SortSpec } from '../../../../store/requester'
import { Omit } from '../../../../util/types'
import { DataTable, DataTableProps } from '../DataTable/DataTable'
import { TableFooter } from '../TableFooter/TableFooter'

import { TableContainer } from './TableContainer'

export interface PagedTableProps<T> extends Omit<DataTableProps<T>, 'rows' | 'sort'> {
    page: Page<T>
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

export class PagedTable<T> extends React.PureComponent<PagedTableProps<T>> {
    render() {
        const { page, onPageChange, onSizeChange, ...rest } = this.props

        return (
            <TableContainer>
                <DataTable
                    rows={page.content}
                    sort={page.sort && transformSortResult(page.sort)}
                    {...rest}
                />
                <TableFooter
                    style={{ borderTop: 'none' }}
                    page={page.number}
                    pageSize={page.size}
                    totalPages={page.totalPages}
                    totalElements={page.totalElements}
                    onPageChange={onPageChange}
                    onSizeChange={onSizeChange}
                />
            </TableContainer>
        )
    }
}

export const transformSortResult = (sort: SortSpec[]): string[] => {
    // TODO: remove this logic from here
    return sort.map(s => s.ascending ? s.property : `-${s.property}`)
}
