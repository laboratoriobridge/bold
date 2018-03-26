import { css as emotionCss } from 'emotion'
import * as React from 'react'

import { Color, withStyles, WithStylesProps } from '../../../styles'

import { IconMap, Icons } from './generated/Icons'

export interface IconProps extends WithStylesProps {
    icon: Icons
    color?: Color
    size?: number
    title?: string
}

@withStyles
export class Icon extends React.PureComponent<IconProps> {

    static defaultProps: Partial<IconProps> = {
        size: 1.5,
    }

    render() {
        const SelectedIcon = IconMap[this.props.icon]

        const styles = {
            icon: {
                fill: this.props.color ? this.props.theme.color[this.props.color] : 'currentColor',
                fontSize: this.props.size && this.props.size + 'rem',
            },
            span: {
                display: 'inline-flex',
            },
        }

        return (
            <span title={this.props.title} className={this.props.css(styles.span)}>
                <SelectedIcon className={emotionCss(styles.icon)} aria-hidden='true' />
            </span>
        )
    }

}
