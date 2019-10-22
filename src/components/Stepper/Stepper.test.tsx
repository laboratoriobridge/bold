import { render } from '@testing-library/react'
import React from 'react'

import { Stepper } from './Stepper'

it('should render correctly', () => {
  const { container } = render(<Stepper>Stepper content</Stepper>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Stepper style={{ color: 'red' }}>Stepper content</Stepper>)
  expect(container).toMatchSnapshot()
})

it('should allow override of "Root" component', () => {
  const RootOverride = props => <span id='root' {...props} />
  const { container } = render(<Stepper overrides={{ Root: RootOverride }}>Stepper content</Stepper>)
  expect(container.querySelector('#root')).toBeTruthy()
  expect(container.querySelector('#root').textContent).toEqual('Stepper content')
})
