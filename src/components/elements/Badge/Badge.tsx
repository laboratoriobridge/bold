import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface BadgeProps extends WithStylesProps {

}

@withStyles
export class Badge extends React.PureComponent<BadgeProps> {
    render() {
        const { css, theme } = this.props
        const styles = {
            badge: {
                background: theme.color.background,
                color: theme.color.gray40,
                padding: '0.25rem',
                fontWeight: 'bold',
                borderRadius: '3px',
                fontSize: '0.8em',
                textTransform: 'uppercase',
                letterSpacing: '1px',
            },
        }

        return (
            <span className={css(styles.badge)}>{this.props.children}</span>
        )
    }
}
