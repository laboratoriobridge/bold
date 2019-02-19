import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableBodyProps extends WithStylesProps, Omit<React.HTMLAttributes<any>, 'style'> {
    style?: Interpolation
}

@withStyles
export class TableBody extends React.PureComponent<TableBodyProps> {
    render() {
        const { theme, css, style, ...rest } = this.props
        const styles = createTableStyles(theme)
        return <tbody className={css(styles.tbody, style)} {...rest} />
    }
}
