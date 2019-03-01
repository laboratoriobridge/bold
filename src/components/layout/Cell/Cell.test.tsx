import React from 'react'
import { render } from 'react-testing-library'

import { Cell } from './Cell'

it('should render correctly', () => {
  const { container } = render(<Cell>Content</Cell>)
  expect(container).toMatchSnapshot()
})

it('should accept flex item props', () => {
  const { container } = render(
    <Cell size={6} alignSelf='center' flexGrow={1} flexShrink={1} flexBasis='50%'>
      Content
    </Cell>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Cell style={{ color: 'red' }}>Content</Cell>)
  expect(container).toMatchSnapshot()
})

it('should pass props down to div', () => {
  const { container } = render(
    <Cell id='div' aria-label='test'>
      Content
    </Cell>
  )
  expect(container.querySelector('div').getAttribute('id')).toEqual('div')
  expect(container.querySelector('div').getAttribute('aria-label')).toEqual('test')
})
