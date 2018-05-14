import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { SortableLabel, SortDirection } from '../SortableLabel/SortableLabel'

import { createTableStyles } from './styles'

export interface TableHeaderProps extends WithStylesProps, Omit<React.ThHTMLAttributes<any>, 'css'> {
    sortable?: boolean
    sortDirection?: SortDirection
    onSortChange?(direction: SortDirection): any
}

@withStyles
export class TableHeader extends React.PureComponent<TableHeaderProps> {
    static defaultProps: Partial<TableHeaderProps> = {
        sortable: false,
        sortDirection: '',
        onSortChange: () => null,
    }

    render() {
        const { theme, css, sortable, sortDirection, onSortChange, ...rest } = this.props
        const styles = createTableStyles(theme)

        if (!sortable) {
            return <th className={css(styles.th)} {...rest} />
        }

        return (
            <th className={css(styles.th)} {...rest}>
                <SortableLabel dir={sortDirection} onChange={onSortChange}>
                    {this.props.children}
                </SortableLabel>
            </th>
        )
    }
}
