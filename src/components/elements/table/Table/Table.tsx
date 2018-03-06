import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'

export interface TableProps<T> extends WithStylesProps {
    rows: T[]
}

@withStyles
export class Table<T> extends React.Component<TableProps<T>> {
    render() {
        const { css, theme, children, rows } = this.props
        const styles = {
            table: {
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.75rem',
                border: `1px solid ${theme.color.gray90}`,
            },

            // Aplicado ao th e td
            cell: {
                textAlign: 'left',
                padding: '0.75rem 1rem',
                borderBottom: `1px solid ${theme.color.gray90}`,
            },
        }

        return (
            <table className={css(styles.table)}>
                <thead>
                    <tr>
                        {React.Children.map(children, (child: any, idx) => {
                            if (child && child.type === TableColumn) {
                                return <Th
                                    key={idx}
                                    styles={styles.cell}
                                    {...child.props}
                                />
                            } else {
                                /* tslint:disable-next-line */
                                console.warn('<Table> aceita apenas <TableColumn> como children')
                            }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {React.Children.map(children, (child: any, colIdx) => {
                                if (child && child.type === TableColumn) {
                                    return <Td
                                        key={rowIdx + '-' + colIdx}
                                        styles={styles.cell}
                                        row={row}
                                        {...child.props}
                                    />
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export interface TableColumnProps<T> extends WithStylesProps {
    title?: React.ReactNode
    name?: string
    render(row: T): React.ReactNode
}

export class TableColumn<T> extends React.Component<TableColumnProps<T>> {
    render() {
        return null
    }
}

@withStyles
class Th<T> extends React.Component<TableColumnProps<T>> {
    static defaultProps: Partial<TableColumnProps<any>> = {
        title: '',
    }

    render() {
        const { css, title, name } = this.props

        return (
            <th className={css()} data-name={name}>
                {title}
            </th>
        )
    }
}

interface TdProps<T> extends TableColumnProps<T> {
    row: T
}

@withStyles
class Td<T> extends React.Component<TdProps<T>> {
    render() {
        const { css, render, row, name } = this.props

        return (
            <td className={css()} data-name={name}>
                {render(row)}
            </td>
        )
    }
}
