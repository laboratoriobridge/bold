import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Spinner } from '../../../elements/Spinner/Spinner'
import { TableCell, TableRow } from '../Table'

export interface TableLoadingRowProps extends WithStylesProps {
    colSpan: number
    message?: string
}

@withStyles
export class TableLoadingRow extends React.PureComponent<TableLoadingRowProps> {
    static defaultProps: Partial<TableLoadingRowProps> = {
        message: 'Carregando resultados',
    }

    render() {
        const { css, theme, colSpan } = this.props
        const styles = {
            cell: {
                background: theme.pallete.surface.background,
                color: theme.pallete.primary.main,
                fontWeight: 'bold',
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *:first-child': {
                    marginRight: '0.5rem',
                },
            },
        }
        return (
            <TableRow>
                <TableCell colSpan={colSpan} styles={styles.cell}>
                    <div className={css(styles.container)}>
                        <Spinner />
                        {this.props.message}
                    </div>
                </TableCell>
            </TableRow>
        )
    }
}
