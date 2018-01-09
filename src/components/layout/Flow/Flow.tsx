import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { Spacing } from '../Spacing/Spacing'

export interface FlowProps extends WithStylesProps {
    direction?: 'horizontal' | 'vertical'
    vSpacing?: number
    hSpacing?: number
}

@withStyles
export class Flow extends React.PureComponent<FlowProps> {

    static defaultProps: FlowProps = {
        direction: 'horizontal',
        vSpacing: 0,
        hSpacing: 1,
    }

    render() {
        const { createStyles, css, direction, hSpacing } = this.props

        const styles = createStyles(theme => ({
            flowHorizontal: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            flowVertical: {
                display: 'flex',
                flexDirection: 'column',
            },
        }))

        return (
            <div
                style={{ margin: `0 ${-hSpacing / 2}rem` }}
                className={css(direction === 'horizontal' ? styles.flowHorizontal : styles.flowVertical)}
            >
                {React.Children.map(this.props.children, (child) => this.renderChild(child))}
            </div>
        )
    }

    renderChild = (child) => {
        return (
            <Spacing
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
