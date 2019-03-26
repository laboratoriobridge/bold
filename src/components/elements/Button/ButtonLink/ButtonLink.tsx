import { Interpolation } from 'emotion'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { Button, ButtonProps } from '../Button/Button'
import { ButtonBaseRenderProps } from '../ButtonBase'

export interface ButtonLinkProps extends ButtonProps, Pick<LinkProps, 'to' | 'replace'> {}

export function ButtonLink(props: ButtonLinkProps) {
  const { to, replace, style, ...rest } = props

  const linkStyle: Interpolation = {
    textDecoration: 'none',
  }

  const renderLink = (buttonProps: ButtonBaseRenderProps) => {
    const {
      disabled, // `<a>` tag does not support the 'disabled' prop
      ...other
    } = buttonProps

    return (
      <Link
        {...other as any}
        to={to}
        replace={replace}
        aria-disabled={disabled === true ? true : undefined}
        tabIndex={disabled ? -1 : buttonProps.tabIndex}
      />
    )
  }

  return <Button {...rest} style={{ ...linkStyle, ...(style as any) }} render={renderLink} />
}
