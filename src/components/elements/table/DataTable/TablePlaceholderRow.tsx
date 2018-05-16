import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { TableCell, TableRow } from '../Table'

export interface TablePlaceholderRowProps extends WithStylesProps {
    colSpan: number
    message?: string
}

@withStyles
export class TablePlaceholderRow extends React.PureComponent<TablePlaceholderRowProps> {
    static defaultProps: Partial<TablePlaceholderRowProps> = {
        message: 'Nenhum registro encontrado',
    }

    render() {
        const { theme, colSpan, message } = this.props
        const styles = {
            cell: {
                color: theme.color.gray40,
                fontStyle: 'italic',
                textAlign: 'center',
            },
        }
        return (
            <TableRow>
                <TableCell colSpan={colSpan} styles={styles.cell}>
                    {message}
                </TableCell>
            </TableRow>
        )
    }
}
