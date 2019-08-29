import { render } from '@testing-library/react'
import React from 'react'

import { HFlow } from './HFlow'

it('should render correctly', () => {
  const { container } = render(
    <HFlow>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      456
    </HFlow>
  )
  expect(container).toMatchSnapshot()
})

it('should accept some grid props', () => {
  const { container } = render(
    <HFlow hSpacing={2} alignItems='center' justifyContent='space-between'>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </HFlow>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(
    <HFlow style={{ color: 'red' }}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </HFlow>
  )
  expect(container).toMatchSnapshot()
})
