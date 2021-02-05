import React from 'react'

import { Link } from '../Link'

import { Breadcrumbs } from './Breadcrumbs'

export default {
  title: 'Components/Breadcrumbs',
}

export const Default = () => (
  <Breadcrumbs>
    <Link color='inherit' textDecoration='none' href='/first'>
      First level
    </Link>
    <Link color='inherit' textDecoration='none' href='/first/second/'>
      Second level
    </Link>
    <Link color='inherit' textDecoration='none' href='/first/second/third/'>
      Third level
    </Link>
    <Link color='inherit' textDecoration='none' href='/first/second/third/fourth/'>
      Fourth level
    </Link>
  </Breadcrumbs>
)
