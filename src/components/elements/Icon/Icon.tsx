import * as React from 'react'

import { withStyles, WithStylesProps } from '../../..'
import { Color } from '../../../styles'

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
        color: 'text',
        size: 1.5,
    }

    render() {
        const SelectedIcon = IconMap[this.props.icon]

        const styles = {
            fill: this.props.theme.color[this.props.color],
            fontSize: this.props.size && this.props.size + 'rem',
        }

        return (
            <span title={this.props.title}>
                <SelectedIcon className={this.props.css(styles)} aria-hidden='true' />
            </span>
        )
    }

}
