import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableRowProps extends WithStylesProps, Omit<React.HTMLAttributes<any>, 'css'> { }

@withStyles
export class TableRow extends React.PureComponent<TableRowProps> {
    render() {
        const { theme, css, ...rest } = this.props
        const styles = createTableStyles(theme)
        return <tr className={css(styles.row)} {...rest} />
    }
}
