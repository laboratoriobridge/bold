import { Button, ButtonProps } from 'bold-ui'
import GatsbyLink from 'gatsby-link'
import React from 'react'

import { LocaleLink, LocaleLinkProps } from './LocaleLink'

export interface ButtonLinkProps extends ButtonProps, Partial<Pick<LocaleLinkProps, 'to' | 'activeClassName'>> {
  href?: string
  localized?: boolean
}

export function ButtonLink(props: ButtonLinkProps) {
  const { localized, ...rest } = props

  const component = (props.to && localized && LocaleLink) || (props.to && GatsbyLink) || 'a'

  return <Button component={component} {...rest} />
}

ButtonLink.defaultProps = {
  localized: true,
}
