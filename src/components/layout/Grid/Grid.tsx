import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export interface GridProps extends WithStylesProps, Pick<React.CSSProperties, 'alignItems' | 'justifyContent'> {
    wrap?: boolean
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    direction?: Direction
    style?: Interpolation
}

@withStyles
export class Grid extends React.PureComponent<GridProps> {
    render() {
        const { css, theme, style } = this.props
        const styles: Styles = {
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

        const classes = css(
            styles.grid,
            this.props.wrap && styles.wrap,
            style
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
