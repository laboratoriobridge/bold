import React from 'react'
import { render } from 'react-testing-library'

import { StickyContainer } from './StickyContainer'

it('should render correctly', () => {
  const { container } = render(<StickyContainer>Content</StickyContainer>)
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<StickyContainer style={{ color: 'red' }}>Content</StickyContainer>)
  expect(container).toMatchSnapshot()
})
