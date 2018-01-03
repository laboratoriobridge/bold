import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Color } from '../style/Theme'

export type Weight = 'normal' | 'bold'

export interface TextProps {
    color?: Color
    size?: number
    weight?: Weight
}

export class Text extends React.PureComponent<TextProps> {

    static defaultProps: Partial<TextProps> = {
        color: 'gray70',
        size: 1,
        weight: 'normal'
    }

    static contextTypes = {
        theme: PropTypes.object
    }

    render() {
        const style: React.CSSProperties = {
            color: this.context.theme[this.props.color],
            fontSize: this.props.size + 'rem',
            fontWeight: this.props.weight
        }
        return (
            <span style={style}>
                {this.props.children}
            </span>
        )
    }

}
