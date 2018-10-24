import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableRowProps extends WithStylesProps, Omit<React.HTMLAttributes<any>, 'css' | 'style'> {
    style?: Interpolation
}

@withStyles
export class TableRow extends React.PureComponent<TableRowProps> {
    render() {
        const { theme, css, style, ...rest } = this.props
        const styles = createTableStyles(theme)
        return (
            <tr className={css(styles.row, this.props.onClick && styles.pointer, style)} {...rest} />
        )
    }
}
