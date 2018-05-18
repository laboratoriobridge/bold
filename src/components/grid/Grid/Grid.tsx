import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface GridProps extends WithStylesProps, Pick<React.CSSProperties, 'alignItems' | 'justifyContent'> {
    wrap?: boolean
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    direction?: Direction
}

@withStyles
export class Grid extends React.PureComponent<GridProps> {
    render() {
        const { theme } = this.props
        const styles = {
            grid: {
                alignItems: this.props.alignItems,
                display: 'flex',
                flexDirection: this.props.direction,
                justifyContent: this.props.justifyContent,
                marginLeft: '-1rem',
                marginRight: '-1rem',
                height: '100%',

                [theme.breakpoints.down('small')]: {
                    marginLeft: '-0.5rem',
                    marginRight: '-0.5rem',
                },
            },

            wrap: {
                flexWrap: 'wrap',
            },
        }

        const classes = this.props.css(
            styles.grid,
            this.props.wrap && styles.wrap
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
