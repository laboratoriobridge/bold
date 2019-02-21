import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { pluralize } from '../../../../util/string'
import { HFlow } from '../../../layout'
import { Paginator } from '../../Paginator/Paginator'
import { Text } from '../../textual'
import { Number } from '../../textual/Number/Number'

import { TableSizeDropdown } from './TableSizeDropdown'

export interface TableFooterProps extends WithStylesProps {
    page: number
    totalPages: number
    totalElements: number
    pageSize: number
    style?: Interpolation
    sizeOptions?: number[]
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

@withStyles
export class TableFooter extends React.Component<TableFooterProps> {

    static defaultProps: Partial<TableFooterProps> = {
        sizeOptions: [10, 30, 50, 100],
    }

    render() {
        const { css, theme, style } = this.props
        const styles: Styles = {
            footer: {
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid ' + theme.pallete.divider,
                height: 40,
            },
            results: {
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '1rem',
                paddingLeft: '1rem',
            },
            pagination: {
                borderLeft: '1px solid ' + theme.pallete.divider,
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between',
                padding: '4px 1rem',
            },
        }
        return (
            <div className={css(styles.footer, style)}>
                <span className={css(styles.results)}>
                    <Number
                        value={this.props.totalElements}
                        sufix={' ' + pluralize('resultado', this.props.totalElements)}
                        abbrev
                    />
                </span>
                {this.showPagination() &&
                    <div className={css(styles.pagination)}>
                        <HFlow alignItems='center' hSpacing={0.5}>
                            <Text>Mostrar:</Text>
                            <TableSizeDropdown
                                options={this.props.sizeOptions}
                                size={this.props.pageSize}
                                onChange={this.props.onSizeChange}
                            />
                        </HFlow>
                        <Paginator
                            page={this.props.page}
                            total={this.props.totalPages}
                            onChange={this.props.onPageChange}
                        />
                    </div>
                }
            </div>
        )
    }

    showPagination() {
        return this.props.totalElements > this.props.pageSize ||
            this.props.totalElements > Math.min(...this.props.sizeOptions)
    }
}
