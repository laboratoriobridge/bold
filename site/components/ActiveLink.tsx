import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface ActiveLinkProps /*extends LinkProps*/ {
  activeClassName?: string
  children?: any
  href: string
}

const ActiveLink = (props: ActiveLinkProps) => {
  const router = useRouter()
  const { activeClassName, children, ...rest } = props
  const child = React.Children.only(children)

  let className = child.props.className || null
  if (router && router.pathname.startsWith(props.href as string) && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
  }

  return <Link {...rest}>{React.cloneElement(child, { ...child.props, className })}</Link>
}

export default ActiveLink
