import React, { AnchorHTMLAttributes } from 'react'
import { fireEvent, render } from 'react-testing-library'

import { TabItem, TabItemProps } from './TabItem'
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

it('shuld accept "component" prop', () => {
  const TabLink = (props: AnchorHTMLAttributes<HTMLAnchorElement> & TabItemProps) => (
    <TabItem component='a' {...props} />
  )

  const { container } = render(
    <Tabs>
      <TabLink href='/'>Home</TabLink>
      <TabLink href='/'>Test</TabLink>
      <TabLink href='/' active>
        Active
      </TabLink>
      <TabLink href='/' disabled>
        Disabled
      </TabLink>
    </Tabs>
  )
  expect(container).toMatchSnapshot()
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
  expect(items[3].getAttribute('tabindex')).toEqual('-1')

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(items[2].getAttribute('tabindex')).toEqual('-1')
  expect(items[3].getAttribute('tabindex')).toEqual('0')

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(items[2].getAttribute('tabindex')).toEqual('0')
  expect(items[3].getAttribute('tabindex')).toEqual('-1')
})
