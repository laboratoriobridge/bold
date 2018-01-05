import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Color } from '../../../styles/theme/Theme'

export type Weight = 'normal' | 'bold'
export type TextTag = 'span' | 'p' | 'div' | 'label'

export interface TextProps {
    color?: Color
    size?: number
    weight?: Weight
    tag?: TextTag
}

export class Text extends React.PureComponent<TextProps> {

    static defaultProps: Partial<TextProps> = {
        tag: 'span',
    }

    static contextTypes = {
        theme: PropTypes.object,
    }

    render() {
        const style: React.CSSProperties = {
            color: this.context.theme.color[this.props.color],
            fontSize: this.props.size + 'rem',
            fontWeight: this.props.weight,
        }

        return React.createElement(this.props.tag, { style }, this.props.children)
    }

}
