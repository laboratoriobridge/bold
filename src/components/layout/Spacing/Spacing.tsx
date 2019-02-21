import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../styles/index'

export interface SpacingProps extends WithStylesProps {
    top?: number
    right?: number
    bottom?: number
    left?: number
    block?: boolean
    style?: Interpolation
}

@withStyles
export class Spacing extends React.PureComponent<SpacingProps> {

    static defaultProps: SpacingProps = {
        block: false,
    }

    render() {
        const styles = {
            marginTop: this.props.top + 'rem',
            marginRight: this.props.right + 'rem',
            marginBottom: this.props.bottom + 'rem',
            marginLeft: this.props.left + 'rem',
            display: !this.props.block && 'inline-block',
        }

        return (
            <div className={this.props.css(styles, this.props.style)}>{this.props.children}</div>
        )
    }
}
