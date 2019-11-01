import { Link, LinkProps } from 'bold-ui'
import { GatsbyLinkProps } from 'gatsby-link'
import { Link as IntlLink } from 'gatsby-plugin-intl'
import React from 'react'

export interface LocaleLinkProps extends LinkProps, Pick<GatsbyLinkProps<any>, 'to' | 'activeClassName'> {}

export function LocaleLink(props: LocaleLinkProps) {
  return <Link component={IntlLink} {...props} />
}
