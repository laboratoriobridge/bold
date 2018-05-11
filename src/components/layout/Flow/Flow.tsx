import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { AlignItems, JustifyContent } from '../../grid/Grid/Grid'
import { Spacing } from '../Spacing/Spacing'

export interface FlowProps extends WithStylesProps {
    direction?: 'horizontal' | 'vertical'
    vSpacing?: number
    hSpacing?: number
    alignItems?: AlignItems
    justifyContent?: JustifyContent
}

@withStyles
export class Flow extends React.PureComponent<FlowProps> {

    static defaultProps: FlowProps = {
        direction: 'horizontal',
        vSpacing: 0,
        hSpacing: 1,
    }

    render() {
        const { css, direction } = this.props

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

        return (
            <div
                className={css(styles.flow, direction === 'horizontal' ? styles.flowHorizontal : styles.flowVertical)}
            >
                {React.Children.map(this.props.children, (child) => this.renderChild(child))}
            </div>
        )
    }

    renderChild = (child) => {
        const { direction } = this.props

        const styles = {
            child: {
                ':first-child': {
                    marginTop: direction === 'vertical' && 0,
                    marginLeft: direction === 'horizontal' && 0,
                },
                ':last-child': {
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
                styles={styles.child}
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
