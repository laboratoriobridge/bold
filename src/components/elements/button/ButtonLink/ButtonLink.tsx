import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { withStyles, WithStylesProps } from '../../../../styles'
import { createBaseStyles, createSizeStyles, skinMap, SkinProps } from '../Button/ButtonSkins'

export interface ButtonLinkProps extends SkinProps, WithStylesProps, Pick<LinkProps, 'to' | 'replace'> {
    label: string
}

@withStyles
export class ButtonLink extends React.PureComponent<ButtonLinkProps> {

    static defaultProps: Partial<ButtonLinkProps> = {
        type: 'normal',
        skin: 'default',
        size: 'medium',
    }

    render() {
        const { css, theme, label, size, skin, type, ...rest } = this.props
        const styles = {
            link: {
                textDecoration: 'none',
            },
        }

        const skinStyles = skinMap[skin](theme)
        const sizeStyles = createSizeStyles(theme)
        const baseStyles = createBaseStyles(theme)

        const classes = css(
            styles.link,
            baseStyles.button,
            skinStyles.button,
            type === 'primary' && skinStyles.primary,
            size === 'medium' && sizeStyles.medium,
            size === 'small' && sizeStyles.small
        )

        return (
            <Link className={classes} {...rest}>
                {label}
            </Link>
        )
    }
}
