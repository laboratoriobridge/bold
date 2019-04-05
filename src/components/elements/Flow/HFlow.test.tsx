import React from 'react'
import { render } from 'react-testing-library'

import { HFlow } from './HFlow'

it('should render correctly', () => {
  const { container } = render(
    <HFlow>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </HFlow>
  )
  expect(container).toMatchSnapshot()
})

it('should accept Flow props', () => {
  const { container } = render(
    <HFlow vSpacing={2} hSpacing={1}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </HFlow>
  )
  expect(container).toMatchSnapshot()
})
