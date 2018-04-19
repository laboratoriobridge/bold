import * as React from 'react'

import { Page, SortSpec } from '../../../../store/requester'
import { withStyles } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { SortableLabel, SortDirection } from '../SortableLabel/SortableLabel'
import { Table, TableColumn, TableColumnProps, TableProps } from '../Table/Table'
import { TableFooter } from '../TableFooter/TableFooter'

export interface DataTableProps<T> extends Omit<TableProps<T>, 'rows'> {
    page: Page<T>
    onSortChange(sort: string[]): void
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

@withStyles
export class DataTable<T> extends React.PureComponent<DataTableProps<T>> {

    render() {
        const { css, children, page, onPageChange, onSizeChange, ...tableProps } = this.props
        return (
            <div className={css()}>
                <Table rows={page.content} {...tableProps}>
                    {React.Children.map(children, (child: any, idx) => {
                        if (child && child.type === DataTableColumn) {
                            return (
                                <TableColumn
                                    {...child.props}
                                    title={this.renderColumnTitle(child.props, page.sort)}
                                />
                            )
                        } else {
                            return child
                        }
                    })}
                </Table>
                <TableFooter
                    styles={{ borderTop: 'none' }}
                    page={page.number}
                    pageSize={page.size}
                    totalPages={page.totalPages}
                    totalElements={page.totalElements}
                    onPageChange={onPageChange}
                    onSizeChange={onSizeChange}
                />
            </div>
        )
    }

    private renderColumnTitle = (colProps: DataTableColumnProps<T>, sort: SortSpec[]) => {
        const handleSortChange = (dir: SortDirection) => this.handleSortChange(colProps, dir)

        if (colProps.title) {
            const dir = sort && getPropertyDirection(colProps.name, sort)

            if (!colProps.sortable) {
                return colProps.title || colProps.name
            }

            return (
                <SortableLabel dir={dir} onChange={handleSortChange}>
                    {colProps.title || colProps.name}
                </SortableLabel>
            )
        } else {
            return null
        }
    }

    private handleSortChange = (colProps: DataTableColumnProps<T>, dir: SortDirection) => {
        const sort = colProps.name + ',' + dir
        // TODO: permitir ordenamento múltiplo (segurando shift ao ordenar?)
        this.props.onSortChange([sort])
    }

}

export interface DataTableColumnProps<T> extends TableColumnProps<T> {
    name: string
    sortable?: boolean
}

export class DataTableColumn<T> extends React.Component<DataTableColumnProps<T>> {
    static defaultProps = {
        sortable: false,
    }

    render() {
        return null
    }
}

const getPropertyDirection = (property: string, sort: SortSpec[]) => {
    for (const s of sort) {
        if (s.property === property) {
            return s.direction
        }
    }

    return null
}
