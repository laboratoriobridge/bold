import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Spacing } from '../Spacing/Spacing'

export interface FlowProps extends WithStylesProps {
    direction?: 'horizontal' | 'vertical'
    vSpacing?: number
    hSpacing?: number
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    style?: Interpolation
}

@withStyles
export class Flow extends React.PureComponent<FlowProps> {

    static defaultProps: FlowProps = {
        direction: 'horizontal',
        vSpacing: 0,
        hSpacing: 1,
    }

    render() {
        const { css, direction, style } = this.props

        const styles = {
            flow: {
                display: 'flex',
                alignItems: this.props.alignItems,
                justifyContent: this.props.justifyContent,
            },
            flowHorizontal: {
            },
            flowVertical: {
                flexDirection: 'column',
            },
        }

        const classes = css(styles.flow,
            direction === 'horizontal' ? styles.flowHorizontal : styles.flowVertical,
            style)

        return (
            <div className={classes}>
                {React.Children.map(this.props.children, (child) => this.renderChild(child))}
            </div>
        )
    }

    renderChild = (child) => {
        const { direction } = this.props

        const styles: Styles = {
            child: {
                ':first-of-type': {
                    marginTop: direction === 'vertical' && 0,
                    marginLeft: direction === 'horizontal' && 0,
                },
                ':last-of-type': {
                    marginBottom: direction === 'vertical' && 0,
                    marginRight: direction === 'horizontal' && 0,
                },
                ':empty': {
                    display: 'none',
                },
            },
        }

        return child && (
            <Spacing
                style={styles.child}
                top={this.props.vSpacing / 2}
                bottom={this.props.vSpacing / 2}
                left={this.props.hSpacing / 2}
                right={this.props.hSpacing / 2}
            >
                {child}
            </Spacing>
        )
    }
}
