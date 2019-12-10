import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { TabItem } from './TabItem'
import { Tabs } from './Tabs'

it('renders correctly', () => {
  expect(
    render(
      <Tabs>
        <TabItem>Home</TabItem>
        <TabItem>Test</TabItem>
        <TabItem active>Active</TabItem>
        <TabItem disabled>Disabled</TabItem>
      </Tabs>
    ).container
  ).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  expect(render(<Tabs style={{ color: 'red' }}>Children</Tabs>).container).toMatchSnapshot()
})

it('should have a roving tabindex', () => {
  const { container } = render(
    <Tabs>
      <TabItem>Home</TabItem>
      <TabItem>Test</TabItem>
      <TabItem active>Active</TabItem>
      <TabItem disabled>Disabled</TabItem>
    </Tabs>
  )
  const ul = container.querySelector('ul')
  const items = container.querySelectorAll<any>('[role="tab"]')
  expect(items[0].getAttribute('tabindex')).toEqual('0')
  expect(items[1].getAttribute('tabindex')).toEqual('-1')

  items[2].focus()
  expect(items[0].getAttribute('tabindex')).toEqual('-1')
  expect(items[1].getAttribute('tabindex')).toEqual('-1')
  expect(items[2].getAttribute('tabindex')).toEqual('0')

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(items[2].getAttribute('tabindex')).toEqual('0')

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(items[1].getAttribute('tabindex')).toEqual('0')
  expect(items[2].getAttribute('tabindex')).toEqual('-1')
})
