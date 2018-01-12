import * as React from 'react'

import { makeOptionClasses, withStyles, WithStylesProps } from '../../../styles'

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
                display: 'flex',
                marginLeft: '-1rem',
                marginRight: '-1rem',
                height: '100%',

                [theme.breakpoint.small]: {
                    marginLeft: '-0.5rem',
                    marginRight: '-0.5rem',
                },
            },

            wrap: {
                flexWrap: 'wrap',
            },

            ...makeOptionClasses('align__', 'alignItems', ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
            ...makeOptionClasses('justify__', 'justifyContent', ['flex-start', 'flex-end', 'center', 'space-between',
                'space-around', 'space-evenly']),
            ...makeOptionClasses('direction__', 'flexDirection', ['row', 'row-reverse', 'column', 'column-reverse']),
        }

        const classes = this.props.css(
            styles.grid,
            this.props.wrap && styles.wrap,
            this.props.alignItems && styles['align__' + this.props.alignItems],
            this.props.justifyContent && styles['justify__' + this.props.justifyContent],
            this.props.direction && styles['direction__' + this.props.direction]
        )

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}
