import React from 'react'
import { render } from 'react-testing-library'

import { Container } from './Container'

it('should render correctly', () => {
  const { container } = render(<Container>Content</Container>)
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<Container style={{ padding: '5rem' }}>Content</Container>)
  expect(container).toMatchSnapshot()
})

it('should accept HTML div element props', () => {
  const { container } = render(<Container id='test'>Content</Container>)
  expect(container.querySelector('div').getAttribute('id')).toEqual('test')
})
