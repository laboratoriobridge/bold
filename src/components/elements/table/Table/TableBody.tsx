import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableBodyProps extends WithStylesProps, Omit<React.HTMLAttributes<any>, 'css'> { }

@withStyles
export class TableBody extends React.PureComponent<TableBodyProps> {
    render() {
        const { theme, css, ...rest } = this.props
        const styles = createTableStyles(theme)
        return <tbody className={css(styles.tbody)} {...rest} />
    }
}
