import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export type TagType = 'normal' | 'danger' | 'info' | 'success' | 'alert'

export interface TagProps extends WithStylesProps {
    type?: TagType
}

@withStyles
export class Tag extends React.PureComponent<TagProps> {
    static defaultProps: TagProps = {
        type: 'normal',
    }

    render() {
        const { css, theme, type } = this.props
        const styles = {
            badge: {
                padding: '0.25rem',
                fontWeight: 'bold',
                borderRadius: '3px',
                fontSize: '0.8em',
                textTransform: 'uppercase',
                letterSpacing: '1px',
            },
        }
        const typeStyles: { [key in TagType]: any } = {
            normal: {
                background: theme.pallete.surface.background,
                color: theme.pallete.gray.c40,
            },
            danger: {
                background: theme.pallete.status.danger.main,
                color: theme.pallete.status.danger.onColor,
            },
            info: {
                background: theme.pallete.status.info.main,
                color: theme.pallete.status.info.onColor,
            },
            success: {
                background: theme.pallete.status.success.main,
                color: theme.pallete.status.success.onColor,
            },
            alert: {
                background: theme.pallete.status.alert.main,
                color: theme.pallete.status.alert.onColor,
            },
        }

        return (
            <span className={css(styles.badge, typeStyles[type])}>{this.props.children}</span>
        )
    }
}
