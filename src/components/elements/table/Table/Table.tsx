import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableProps extends WithStylesProps, Omit<React.TableHTMLAttributes<any>, 'css' | 'style'> {
    hovered?: boolean
    style?: Interpolation
}

@withStyles
export class Table extends React.PureComponent<TableProps> {
    render() {
        const { theme, css, hovered, style, ...rest } = this.props
        const styles = createTableStyles(theme)
        return (
            <table
                className={css(styles.table, hovered && styles.tableHover, style)}
                {...rest}
            />
        )
    }
}
