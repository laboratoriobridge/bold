import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { pluralize } from '../../../../util/string'
import { Paginator } from '../../Paginator/Paginator'
import { Number } from '../../textual/Number/Number'

export interface TableFooterProps extends WithStylesProps {
    page: number
    totalPages: number
    totalElements: number
    onPageChange(page: number): void
}

@withStyles
export class TableFooter extends React.Component<TableFooterProps> {
    render() {
        const { css, theme } = this.props
        const styles = {
            footer: {
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid ' + theme.color.gray90,
            },
            results: {
                fontWeight: 'bold',
                borderRight: '1px solid ' + theme.color.gray90,
                display: 'flex',
                alignItems: 'center',
                paddingRight: '1rem',
                paddingLeft: '1rem',
            },
            pagination: {
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between',
                padding: '4px 1rem',
            },
        }
        return (
            <div className={css(styles.footer)}>
                <span className={css(styles.results)}>
                    <Number
                        value={this.props.totalElements}
                        sufix={' ' + pluralize('resultado', this.props.totalElements)}
                        abbrev
                    />
                </span>
                <div className={css(styles.pagination)}>
                    <span>
                        Mostrar: 10
                    </span>
                    <Paginator
                        page={this.props.page}
                        total={this.props.totalPages}
                        onChange={this.props.onPageChange}
                    />
                </div>
            </div>
        )
    }
}
