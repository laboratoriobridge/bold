import React from 'react'
import { render } from 'react-testing-library'

import { Tag } from './Tag'

it('should render correctly', () => {
  expect(render(<Tag>Normal</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='alert'>Alert</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='danger'>Danger</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='info'>Info</Tag>).container).toMatchSnapshot()
  expect(render(<Tag type='success'>Success</Tag>).container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  expect(render(<Tag style={{ color: 'green' }}>Normal</Tag>).container).toMatchSnapshot()
})

it('should accept HTML span element properties', () => {
  const { container } = render(<Tag id='test'>Normal</Tag>)
  expect(container.querySelector('span').getAttribute('id')).toEqual('test')
})
