import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableCellProps extends WithStylesProps, Omit<React.TdHTMLAttributes<any>, 'css'> { }

@withStyles
export class TableCell extends React.PureComponent<TableCellProps> {
    render() {
        const { theme, css, ...rest } = this.props
        const styles = createTableStyles(theme)
        return <td className={css(styles.cell)} {...rest} />
    }
}
