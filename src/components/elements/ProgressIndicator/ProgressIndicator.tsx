import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { Text } from '../textual/Text/Text'

export interface ProgressIndicatorProps extends WithStylesProps {
    value: number
    max?: number
}

@withStyles
export class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps> {

    static defaultProps: Partial<ProgressIndicatorProps> = {
        max: 100,
    }

    render() {
        const {
            css,
            value,
            max,
            theme,
        } = this.props

        const styles = {
            wrapper: {
                alignItems: 'center',
                display: 'flex',
            },
            progress: {
                appearance: 'none',
                border: 'none',
                flexGrow: 1,
                height: 4,
                marginRight: 25,
                width: '100%',
                '&::-webkit-progress-bar': {
                    backgroundColor: theme.color.gray90,
                    borderRadius: 4,
                },
                '&::-webkit-progress-value': {
                    backgroundColor: theme.color.primary,
                    borderRadius: 4,
                    transition: 'all .3s',
                },
                '&::-moz-progress-bar': {
                    backgroundColor: theme.color.primary,
                    borderRadius: 4,
                    transition: 'all .3s',
                },
            },
        }

        return (
            <div className={css(styles.wrapper)}>
                <progress className={css(styles.progress)} value={value} max={max} />
                <Text styles={{ whiteSpace: 'nowrap' }} weight='bold' color='gray30' size={1}>{value || '0'} %</Text>
            </div>
        )
    }

}
