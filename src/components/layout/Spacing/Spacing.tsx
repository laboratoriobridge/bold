import * as React from 'react'

export interface SpacingProps {
    top?: number
    right?: number
    bottom?: number
    left?: number
    block?: boolean
}

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
            <div style={styles}>{this.props.children}</div>
        )
    }
}
