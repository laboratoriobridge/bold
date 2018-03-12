import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Icons } from '../../Icon/generated/Icons'
import { Icon } from '../../Icon/Icon'
import { createStyles } from '../IconButton/IconButton'

export interface IconButtonLinkProps extends WithStylesProps, Pick<LinkProps, 'to' | 'replace'> {
    icon: Icons
}

@withStyles
export class IconButtonLink extends React.PureComponent<IconButtonLinkProps> {

    render() {
        const { css, icon, theme, ...rest } = this.props
        const styles = {
            ...createStyles(theme),
            link: {
                textDecoration: 'none',
            },
        }

        const classes = css(
            styles.link,
            styles.button
        )

        return (
            <Link className={classes} {...rest}>
                <Icon icon={icon} />
            </Link>
        )
    }
}
