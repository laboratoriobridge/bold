import * as React from 'react'

import { Page, SortSpec } from '../../../../store/requester'
import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'
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
        const { css, children, page, onPageChange, ...tableProps } = this.props
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
                    totalPages={page.totalPages}
                    totalElements={page.totalElements}
                    onPageChange={onPageChange}
                />
            </div>
        )
    }

    private renderColumnTitle = (colProps: DataTableColumnProps<T>, sort: SortSpec[]) => {
        const handleClick = () => this.handleTitleClick(colProps)

        if (colProps.title) {
            const dir = sort && getPropertyDirection(colProps.name, sort)
            const styles = {
                sort: {
                    marginLeft: '0.25rem',
                },
            }

            return (
                <a onClick={handleClick}>
                    {colProps.title || colProps.name}
                    {dir && <Sort styles={styles.sort} dir={dir} />}
                </a>
            )
        } else {
            return null
        }
    }

    private handleTitleClick = (colProps: DataTableColumnProps<T>) => {
        const direction = getPropertyDirection(colProps.name, this.props.page.sort)
        const sort = colProps.name + ',' + (toggleDirection(direction) || 'ASC')

        // TODO: permitir ordenamento múltiplo (segurando shift ao ordenar?)
        this.props.onSortChange([sort])
    }

}

export interface DataTableColumnProps<T> extends TableColumnProps<T> {
    name: string
}

export class DataTableColumn<T> extends React.Component<DataTableColumnProps<T>> {
    render() {
        return null
    }
}

interface SortProps extends WithStylesProps {
    dir: 'ASC' | 'DESC'
}

@withStyles
class Sort extends React.Component<SortProps> {
    render() {
        const { css, dir } = this.props
        if (dir === 'ASC') {
            return <span className={css()}>▾</span>
        } else if (dir === 'DESC') {
            return <span className={css()}>▴</span>
        } else {
            return null
        }
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

const toggleDirection = (dir: 'ASC' | 'DESC') => {
    return (dir === 'ASC' && 'DESC')
        || (dir === 'DESC' && 'ASC')
        || null
}
