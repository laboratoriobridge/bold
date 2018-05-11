import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface SpinnerProps extends WithStylesProps {
    size?: number
    borderWidth?: number
}

@withStyles
export class Spinner extends React.PureComponent<SpinnerProps> {
    static defaultProps: Partial<SpinnerProps> = {
        size: 1,
        borderWidth: 2,
    }

    render() {
        const { css, theme, size, borderWidth } = this.props
        const styles = {
            pointerEvents: 'none',
            'span': {
                color: 'transparent',
            },
            ':after': {
                animation: `${theme.animation.spinAround} 450ms infinite linear`,
                border: `${borderWidth}px solid currentColor`,
                borderRadius: '50%',
                borderRightColor: 'transparent',
                content: '""',
                display: 'inline-block',
                height: `${size}rem`,
                width: `${size}rem`,
                lineHeight: `${size}rem`,
            },
        }
        return (
            <span className={css(styles)} />
        )
    }
}
