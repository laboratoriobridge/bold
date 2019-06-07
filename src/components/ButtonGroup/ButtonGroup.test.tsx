import { fireEvent, render } from '@testing-library/react'
import React from 'react'

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

it('should have a roving tab index', () => {
  const { container } = render(
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  )

  const div = container.querySelector('div')
  const buttons = container.querySelectorAll('button')
  expect(buttons[0].getAttribute('tabindex')).toEqual('0')
  expect(buttons[1].getAttribute('tabindex')).toEqual('-1')

  buttons[1].focus()
  expect(buttons[0].getAttribute('tabindex')).toEqual('-1')
  expect(buttons[1].getAttribute('tabindex')).toEqual('0')
  expect(buttons[2].getAttribute('tabindex')).toEqual('-1')

  fireEvent.keyDown(div, { key: 'ArrowDown' })
  expect(buttons[1].getAttribute('tabindex')).toEqual('-1')
  expect(buttons[2].getAttribute('tabindex')).toEqual('0')

  fireEvent.keyDown(div, { key: 'ArrowUp' })
  expect(buttons[1].getAttribute('tabindex')).toEqual('0')
  expect(buttons[2].getAttribute('tabindex')).toEqual('-1')
})
