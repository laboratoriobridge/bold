import { Interpolation } from 'emotion'
import React from 'react'

import { TextColor } from '../../../../styles'
import { getTextColor } from '../../../../styles/theme/createTheme'
import { withStyles, WithStylesProps } from '../../../../styles/withStyles'
import { Omit } from '../../../../util/types'

export interface HeadingProps extends WithStylesProps, Omit<React.HTMLAttributes<HTMLHeadingElement>, 'style'> {
    level: 1 | 2 | 3 | 4 | 5 | 6
    color?: TextColor
    style?: Interpolation
}

@withStyles
export class Heading extends React.Component<HeadingProps> {

    static defaultProps: Partial<HeadingProps> = {}

    render() {
        const { level, css, theme, children, style, color, ...rest } = this.props
        const styles = {
            color: color && getTextColor(theme, color),
        }

        return React.createElement(`h${level}`, {
            ...rest,
            className: css(styles, style),
        }, children)
    }
}
