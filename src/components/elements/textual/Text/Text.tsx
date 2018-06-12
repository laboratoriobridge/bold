import * as React from 'react'

import { TextColor, withStyles, WithStylesProps } from '../../../../styles'
import { getTextColor } from '../../../../styles/theme/createTheme'

export type Weight = 'normal' | 'bold'
export type TextTag = 'span' | 'p' | 'div' | 'label'
export type FontStyle = 'normal' | 'italic'

export interface TextProps extends WithStylesProps {
    color?: TextColor
    size?: number
    weight?: Weight
    tag?: TextTag
    fontStyle?: FontStyle
}

@withStyles
export class Text extends React.PureComponent<TextProps> {

    static defaultProps: Partial<TextProps> = {
        tag: 'span',
    }

    render() {
        const style = {
            color: this.props.color && getTextColor(this.props.theme, this.props.color),
            fontSize: this.props.size && this.props.size + 'rem',
            fontWeight: this.props.weight,
            fontStyle: this.props.fontStyle,
        }

        return React.createElement(this.props.tag, { className: this.props.css(style) }, this.props.children)
    }

}
