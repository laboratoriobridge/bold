import { render } from '@testing-library/react'
import React from 'react'

import { Icon } from './Icon'

it('should render correctly', () => {
  const { container } = render(<Icon icon='penOutline' />)
  expect(container).toMatchSnapshot()
})

it('should accept size prop', () => {
  expect(render(<Icon icon='bellOutline' size={3} />).container).toMatchSnapshot()
})

it('should accept style prop', () => {
  expect(render(<Icon icon='bellOutline' style={{ strokeWidth: 5 }} />).container).toMatchSnapshot()
})

it('should accept fill prop', () => {
  expect(render(<Icon icon='bellOutline' fill='danger' />).container).toMatchSnapshot()
})

it('should accept stroke prop', () => {
  expect(render(<Icon icon='bellOutline' stroke='alert' />).container).toMatchSnapshot()
})
