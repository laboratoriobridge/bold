import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { render } from 'react-testing-library'

import { withRouter } from '../../../test'

import { Link } from './Link'

it('should render correctly', () => {
  const { container } = render(
    <Link href='/' target='_blank'>
      Link to somewhere
    </Link>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <Link href='/' style={{ color: 'red' }}>
      Red link
    </Link>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "component" prop', () => {
  render(<Link component='button'>Button link</Link>)

  const { container } = render(
    withRouter(
      <Link component={RouterLink} to='/'>
        Router link
      </Link>
    )
  )
  expect(container).toMatchSnapshot()
})
