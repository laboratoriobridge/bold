import React from 'react'
import { render } from 'react-testing-library'

import { Spinner } from './Spinner'

it('should render correctly', () => {
  const { container } = render(<Spinner />)
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(<Spinner style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})
