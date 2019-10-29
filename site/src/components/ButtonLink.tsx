import { Button, ButtonProps } from 'bold-ui'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'
import React from 'react'

export interface ButtonLinkProps extends ButtonProps {
  to?: GatsbyLinkProps<any>['to']
  href?: string
}

export function ButtonLink(props: ButtonLinkProps) {
  if (props.to) {
    return <Button component={GatsbyLink} {...props} />
  } else {
    return <Button component='a' {...props} />
  }
}
