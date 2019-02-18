import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableProps extends WithStylesProps, Omit<React.TableHTMLAttributes<any>, 'style'> {
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
