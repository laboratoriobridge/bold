import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, TextColor, withStyles, WithStylesProps } from '../../../../styles'
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
    style?: Interpolation
}

@withStyles
export class Text extends React.PureComponent<TextProps> {

    static defaultProps: Partial<TextProps> = {
        tag: 'span',
    }

    render() {
        const { css, theme, style, color, size, weight, fontStyle } = this.props
        const styles: Styles = {
            text: {
                color: color && getTextColor(theme, color),
                fontSize: size && size + 'rem',
                fontWeight: weight,
                fontStyle,
            },
        }

        return React.createElement(this.props.tag, {
            className: css(styles.text, style),
        }, this.props.children)
    }

}
