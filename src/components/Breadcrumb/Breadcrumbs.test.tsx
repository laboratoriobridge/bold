import { render } from '@testing-library/react'
import React from 'react'

import { Link } from '../Link'

import { Breadcrumbs } from './Breadcrumbs'

it('should render correctly', () => {
  const { container } = render(
    <Breadcrumbs>
      <Link href='/first'>Link 1</Link>
      <Link href='/first/second'>Link 2</Link>
      <Link href='/first/second/third'>Link 3</Link>
    </Breadcrumbs>
  )
  expect(container).toMatchSnapshot()
})
