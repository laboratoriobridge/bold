import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'

import { createTableStyles } from './styles'

export interface TableHeadProps extends WithStylesProps, Omit<React.HTMLAttributes<any>, 'css'> { }

@withStyles
export class TableHead extends React.PureComponent<TableHeadProps> {
    render() {
        const { theme, css, ...rest } = this.props
        const styles = createTableStyles(theme)
        return <thead className={css(styles.thead)} {...rest} />
    }
}
