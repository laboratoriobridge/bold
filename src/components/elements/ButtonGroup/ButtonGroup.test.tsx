import React from 'react'
import { render } from 'react-testing-library'

import { Button } from '../Button'

import { ButtonGroup } from './ButtonGroup'

it('should render correctly', () => {
  const { container } = render(
    <ButtonGroup>
      <Button>First</Button>
    </ButtonGroup>
  )
  expect(container).toMatchSnapshot()
})

it('should should accept style prop', () => {
  const { container } = render(<ButtonGroup style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})

it('should should accept HTML div element props', () => {
  const { container } = render(<ButtonGroup id='test' />)
  expect(container.querySelector('div').getAttribute('id')).toEqual('test')
})
