import React from 'react'
import { render } from 'react-testing-library'

import { Progress } from './Progress'

it('should render correctly', () => {
  expect(render(<Progress value={40} max={100} />).container).toMatchSnapshot()
})

it('should accept type prop', () => {
  expect(render(<Progress value={40} type='danger' />).container).toMatchSnapshot()
})

it('should accept style prop', () => {
  expect(render(<Progress value={40} style={{ height: 36 }} />).container).toMatchSnapshot()
})
