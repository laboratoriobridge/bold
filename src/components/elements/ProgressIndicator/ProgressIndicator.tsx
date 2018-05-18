import * as React from 'react'

import { Color, withStyles, WithStylesProps } from '../../../styles'

export interface ProgressIndicatorProps extends WithStylesProps {
    color?: Color
    max?: number
    value: number
}

@withStyles
export class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps> {

    static defaultProps: Partial<ProgressIndicatorProps> = {
        color: 'primary',
        max: 100,
    }

    render() {
        const {
            color,
            css,
            value,
            max,
            theme,
        } = this.props

        const styles = {
            progress: {
                appearance: 'none',
                border: 'none',
                height: 4,
                width: '100%',
                '&::-webkit-progress-bar': {
                    backgroundColor: theme.color.gray90,
                    borderRadius: 4,
                },
                '&::-webkit-progress-value': {
                    backgroundColor: theme.color[color],
                    borderRadius: 4,
                    transition: 'all .3s',
                },
                '&::-moz-progress-bar': {
                    backgroundColor: theme.color[color],
                    borderRadius: 4,
                    transition: 'all .3s',
                },
            },
        }

        return (
            <progress className={css(styles.progress)} value={value} max={max} />
        )
    }

}
