import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { SortableLabel, SortDirection } from '../SortableLabel/SortableLabel'

import { createTableStyles } from './styles'

export interface TableHeaderProps extends WithStylesProps, Omit<React.ThHTMLAttributes<any>, 'style'> {
    sortable?: boolean
    sortDirection?: SortDirection
    style?: Interpolation
    onSortChange?(direction: SortDirection, shiftKey?: boolean): any
}

@withStyles
export class TableHeader extends React.PureComponent<TableHeaderProps> {
    static defaultProps: Partial<TableHeaderProps> = {
        sortable: false,
        sortDirection: '',
        onSortChange: () => null,
    }

    render() {
        const { theme, css, sortable, sortDirection, onSortChange, style, ...rest } = this.props
        const styles = createTableStyles(theme)

        if (!sortable) {
            return <th className={css(styles.th, style)} {...rest} />
        }

        return (
            <th className={css(styles.th, style)} {...rest}>
                <SortableLabel direction={sortDirection} onChange={onSortChange}>
                    {this.props.children}
                </SortableLabel>
            </th>
        )
    }
}
