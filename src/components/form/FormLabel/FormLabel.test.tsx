import React from 'react'
import { render } from 'react-testing-library'

import { FormLabel } from './'

it('should render correctly', () => {
  expect(render(<FormLabel label='Label' />).container).toMatchSnapshot()
  expect(render(<FormLabel label='Label' htmlFor='test' required />).container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  expect(render(<FormLabel label='Label' style={{ color: 'blue' }} />).container).toMatchSnapshot()
})
