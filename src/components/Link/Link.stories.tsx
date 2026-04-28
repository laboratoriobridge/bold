import React from 'react'

import { Link } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  args: {
    href: '/',
    children: 'Link to somewhere',
  },
}

export const Default = (args) => (
  <Link href={args.href} target='_blank'>
    {args.children}
  </Link>
)
