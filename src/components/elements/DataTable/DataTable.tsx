import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { Table, TableColumn, TableColumnProps, TableProps } from '../Table/Table'

export interface DataTableProps<T> extends TableProps<T> {
    sort: string[]
    onSort(sort: string[]): any
}

@withStyles
export class DataTable<T> extends React.PureComponent<DataTableProps<T>> {

    render() {
        const { children, sort, ...tableProps } = this.props
        return (
            <Table {...tableProps}>
                {React.Children.map(children, (child: any, idx) => {
                    if (child && child.type === DataTableColumn) {
                        return (
                            <TableColumn
                                {...child.props}
                                title={this.renderColumnTitle(child.props, sort)}
                            />
                        )
                    } else {
                        return child
                    }
                })}
            </Table>
        )
    }

    private renderColumnTitle = (colProps: DataTableColumnProps<T>, sort: string[]) => {
        const handleClick = () => this.handleTitleClick(colProps)

        if (colProps.title) {
            const dir = this.colOrder(colProps.name, sort)
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

    private colOrder = (colName: string, currentSort: string[]) => {
        for (const s of currentSort) {
            const parts = s.split(',')
            if (parts[0] === colName) {
                return parts[1] as any || 'ASC'
            }
        }

        return null
    }

    private handleTitleClick = (colProps: DataTableColumnProps<T>) => {
        // TODO: permitir ordenamento múltiplo (segurando shift ao ordenar?)
        this.props.onSort([colProps.name])
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
