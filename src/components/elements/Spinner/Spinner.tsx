import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface SpinnerProps extends WithStylesProps {
    size?: number
    borderWidth?: number
    style?: Interpolation
}

@withStyles
export class Spinner extends React.PureComponent<SpinnerProps> {
    static defaultProps: Partial<SpinnerProps> = {
        size: 1,
        borderWidth: 2,
    }

    render() {
        const { css, theme, style, size, borderWidth } = this.props
        const styles: Styles = {
            pointerEvents: 'none',
            fontSize: `${size}rem`,
            lineHeight: 1,
            ':after': {
                animation: `${theme.animation.spinAround} 450ms infinite linear`,
                border: `${borderWidth}px solid currentColor`,
                borderRadius: '50%',
                borderRightColor: 'transparent',
                content: '""',
                display: 'inline-block',
                height: `${size}rem`,
                width: `${size}rem`,
            },
        }
        return (
            <span className={css(styles, style)} />
        )
    }
}
