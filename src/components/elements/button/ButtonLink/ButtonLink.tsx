import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Type } from '../Button/Button'
import { createStyles } from '../Button/skins/default'

export interface ButtonLinkProps extends WithStylesProps, Pick<LinkProps, 'to' | 'replace'> {
    label: string
    type?: Type
}

@withStyles
export class ButtonLink extends React.PureComponent<ButtonLinkProps> {
    render() {
        const { css, theme, label, type, ...rest } = this.props
        const styles = {
            ...createStyles(theme),
            link: {
                textDecoration: 'none',
            },
        }
        const classes = css(
            styles.button,
            styles.link,
            type === 'primary' && styles.primary
        )

        return (
            <Link className={classes} {...rest}>
                {label}
            </Link>
        )
    }
}
