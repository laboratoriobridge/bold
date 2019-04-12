import { createMemoryHistory } from 'history'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withRouter } from '../../../test'

import { TabLink, Tabs } from './Tabs'

it('renders correctly', () => {
  expect(
    render(
      withRouter(
        <Tabs>
          <TabLink to='/'>Home</TabLink>
          <TabLink to='/test'>Test</TabLink>
          <TabLink to='/active' active>
            Active
          </TabLink>
          <TabLink to='/disabled' disabled>
            Disabled
          </TabLink>
        </Tabs>
      )
    ).container
  ).toMatchSnapshot()
})

it('should not navigate when tab link is disabled', () => {
  const history = createMemoryHistory()
  const { container } = render(
    withRouter(
      <Tabs>
        <TabLink to='/test'>Test</TabLink>
        <TabLink to='/disabled' disabled>
          Disabled
        </TabLink>
      </Tabs>,
      history
    )
  )
  expect(history.location.pathname).toEqual('/')

  fireEvent.click(container.querySelectorAll('a')[0])
  expect(history.location.pathname).toEqual('/test')

  fireEvent.click(container.querySelectorAll('a')[1])
  expect(history.location.pathname).toEqual('/test')
})

it('should have a roving tabindex', () => {
  const { container } = render(
    withRouter(
      <Tabs>
        <TabLink to='/'>Home</TabLink>
        <TabLink to='/test'>Test</TabLink>
        <TabLink to='/active' active>
          Active
        </TabLink>
        <TabLink to='/disabled' disabled>
          Disabled
        </TabLink>
      </Tabs>
    )
  )
  const ul = container.querySelector('ul')
  const links = container.querySelectorAll('a')
  expect(links[0].getAttribute('tabindex')).toEqual('0')
  expect(links[1].getAttribute('tabindex')).toEqual('-1')

  links[2].focus()
  expect(links[0].getAttribute('tabindex')).toEqual('-1')
  expect(links[1].getAttribute('tabindex')).toEqual('-1')
  expect(links[2].getAttribute('tabindex')).toEqual('0')
  expect(links[3].getAttribute('tabindex')).toEqual('-1')

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(links[2].getAttribute('tabindex')).toEqual('-1')
  expect(links[3].getAttribute('tabindex')).toEqual('0')

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(links[2].getAttribute('tabindex')).toEqual('0')
  expect(links[3].getAttribute('tabindex')).toEqual('-1')
})
