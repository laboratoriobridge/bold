import { Interpolation } from 'emotion'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { withStyles } from '../../../../styles'
import { Button, ButtonProps } from '../Button/Button'

export interface ButtonLinkProps extends ButtonProps, Pick<LinkProps, 'to' | 'replace'> {
}

@withStyles
export class ButtonLink extends React.PureComponent<ButtonLinkProps> {

    render() {
        const { to, replace, style, ...other } = this.props

        const linkStyle: Interpolation = {
            textDecoration: 'none',
        }

        return (
            <Button
                {...other}
                style={{ ...linkStyle, ...style as any }}
                render={this.renderLink}
            />
        )
    }

    renderLink = (buttonProps: any) => {
        const { to, replace } = this.props
        const {
            disabled, // `<a>` tag does not support the 'disabled' prop
            css,
            theme,
            ...other
        } = buttonProps

        return (
            <Link
                {...other}
                to={to}
                replace={replace}
                aria-disabled={disabled === true ? true : undefined}
                tabIndex={disabled ? -1 : buttonProps.tabIndex}
            />
        )
    }
}
