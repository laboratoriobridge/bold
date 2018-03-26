import * as React from 'react'

import { Icon } from '../..'
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
        const handleClick = () => this.handleTitleClick(colProps)
        const { css } = this.props

        if (colProps.title) {
            const dir = sort && getPropertyDirection(colProps.name, sort)
            const styles = {
                link: {
                    display: 'inline-flex',
                    alignItems: 'center',
                },
                sort: {
                    marginLeft: '0.25rem',
                },
            }

            if (!colProps.sortable) {
                return colProps.title || colProps.name
            }

            return (
                <a className={css(styles.link)} onClick={handleClick}>
                    {colProps.title || colProps.name}
                    <Sort styles={styles.sort} dir={dir} />
                </a>
            )
        } else {
            return null
        }
    }

    private handleTitleClick = (colProps: DataTableColumnProps<T>) => {
        const direction = getPropertyDirection(colProps.name, this.props.page.sort || [])
        const sort = colProps.name + ',' + (toggleDirection(direction) || 'ASC')

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

interface SortProps extends WithStylesProps {
    dir: 'ASC' | 'DESC' | ''
}

@withStyles
class Sort extends React.Component<SortProps> {
    render() {
        const { dir } = this.props
        const icon = (dir === 'ASC' && 'angleDown')
            || (dir === 'DESC' && 'angleUp')
            || 'sort'

        return (
            <Icon
                styles={{ marginLeft: '0.25rem' }}
                color={icon === 'sort' ? 'gray80' : 'primary'}
                size={1}
                icon={icon}
            />
        )
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
