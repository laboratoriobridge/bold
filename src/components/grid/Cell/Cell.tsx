import * as React from 'react'

import { makeOptionClasses, Theme, withStyles, WithStylesProps } from '../../../styles'

export type AlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

export interface CellProps extends WithStylesProps {
    size?: number
    alignSelf?: AlignSelf
}

const createCellStyle = (theme: Theme, size: number) => {
    return {
        flexBasis: `calc((100% / 12 * ${size}) - 2rem)`,
        [theme.breakpoint.small]: {
            flexBasis: `calc((100% / 12 * ${size}) - 1rem)`,
        },
    }
}

@withStyles
export class Cell extends React.PureComponent<CellProps> {
    render() {
        const styles = this.props.createStyles(theme => ({
            cell: {
                margin: '1rem',
                padding: '0.5rem',

                [theme.breakpoint.small]: {
                    margin: '0.5rem',
                },
            },

            autoSize: {
                flexGrow: 1,
            },

            size1: createCellStyle(theme, 1),
            size2: createCellStyle(theme, 2),
            size3: createCellStyle(theme, 3),
            size4: createCellStyle(theme, 4),
            size5: createCellStyle(theme, 5),
            size6: createCellStyle(theme, 6),
            size7: createCellStyle(theme, 7),
            size8: createCellStyle(theme, 8),
            size9: createCellStyle(theme, 9),
            size10: createCellStyle(theme, 10),
            size11: createCellStyle(theme, 11),
            size12: createCellStyle(theme, 12),

            ...makeOptionClasses('alignSelf__', 'alignSelf',
                ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
        }))

        const classes = this.props.css(
            styles.cell,
            this.props.size ? styles[`size${this.props.size}`] : styles.autoSize,
            this.props.alignSelf && styles['alignSelf__' + this.props.alignSelf]
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
