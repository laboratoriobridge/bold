import React from 'react'
import { render } from 'react-testing-library'

import { VFlow } from './VFlow'

it('should render correctly', () => {
  const { container } = render(
    <VFlow>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </VFlow>
  )
  expect(container).toMatchSnapshot()
})

it('should accept Flow props', () => {
  const { container } = render(
    <VFlow vSpacing={2} hSpacing={1}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </VFlow>
  )
  expect(container).toMatchSnapshot()
})
