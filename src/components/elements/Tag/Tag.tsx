import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface TagProps extends WithStylesProps {

}

@withStyles
export class Tag extends React.PureComponent<TagProps> {
    render() {
        const { css, theme } = this.props
        const styles = {
            badge: {
                background: theme.pallete.surface.background,
                color: theme.pallete.gray.c40,
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
