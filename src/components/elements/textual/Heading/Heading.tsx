import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles/withStyles'

export interface HeadingProps extends WithStylesProps {
    level: 1 | 2 | 3 | 4 | 5 | 6
    style?: Interpolation
}

@withStyles
export class Heading extends React.Component<HeadingProps> {
    render() {
        const { level, css, theme, children, style, ...rest } = this.props

        return React.createElement(`h${level}`, {
            ...rest,
            className: css(style),
        }, children)
    }
}
