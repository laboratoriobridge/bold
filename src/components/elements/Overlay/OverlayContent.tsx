import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface OverlayContentProps extends WithStylesProps {
    style?: any
}

@withStyles
export class OverlayContent extends React.Component<OverlayContentProps> {
    render() {
        const { css, style, children } = this.props
        const styles = {
            content: {
                position: 'absolute',
                padding: '0 5px',
                zIndex: '100',
            },
        }

        return (
            <div className={css(styles.content)} style={style}>
                {children}
            </div>
        )
    }
}
