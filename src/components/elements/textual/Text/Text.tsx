import * as React from 'react'

import { Color } from '../../../../styles/theme/Theme'
import { withStyles, WithStylesProps } from '../../../../styles/withStyles'

export type Weight = 'normal' | 'bold'
export type TextTag = 'span' | 'p' | 'div' | 'label'

export interface TextProps extends WithStylesProps {
    color?: Color
    size?: number
    weight?: Weight
    tag?: TextTag
}

@withStyles
export class Text extends React.PureComponent<TextProps> {

    static defaultProps: Partial<TextProps> = {
        tag: 'span',
    }

    render() {
        const style: React.CSSProperties = {
            color: this.props.color && this.props.theme.color[this.props.color],
            fontSize: this.props.size && this.props.size + 'rem',
            fontWeight: this.props.weight,
        }

        return React.createElement(this.props.tag, { className: this.props.css(style) }, this.props.children)
    }

}
