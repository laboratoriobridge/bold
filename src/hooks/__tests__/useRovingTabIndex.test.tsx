import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { merge } from '../../util'
import { RovingTabIndexOptions, useRovingTabIndex } from '../useRovingTabIndex'

const createComponent = (options?: Partial<RovingTabIndexOptions>) => {
  const config = merge(
    {},
    {
      getItems: root => Array.from(root.querySelectorAll('li')),
    },
    options
  )
  return <Component config={config} />
}

function Component({ config }: { config: RovingTabIndexOptions }) {
  const rootRef = useRovingTabIndex(config)

  return (
    <ul ref={rootRef}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

it('should initialize settings tabindex to children', () => {
  const { container, rerender } = render(createComponent())
  const li = container.querySelectorAll('li')
  expect(li[0].getAttribute('tabindex')).toEqual('0')
  expect(li[1].getAttribute('tabindex')).toEqual('-1')
  expect(li[2].getAttribute('tabindex')).toEqual('-1')

  rerender(createComponent({ initialIndex: 1 }))
  expect(li[0].getAttribute('tabindex')).toEqual('-1')
  expect(li[1].getAttribute('tabindex')).toEqual('0')
  expect(li[2].getAttribute('tabindex')).toEqual('-1')
})

it('should set focused item tabindex to 0 and other items to -1', () => {
  const { container } = render(createComponent())
  const li = container.querySelectorAll('li')
  li[2].focus()

  expect(li[0].getAttribute('tabindex')).toEqual('-1')
  expect(li[1].getAttribute('tabindex')).toEqual('-1')
  expect(li[2].getAttribute('tabindex')).toEqual('0')

  li[1].focus()
  expect(li[0].getAttribute('tabindex')).toEqual('-1')
  expect(li[1].getAttribute('tabindex')).toEqual('0')
  expect(li[2].getAttribute('tabindex')).toEqual('-1')
})

it('should move focus between items according to specified navigation keys', () => {
  const { container } = render(createComponent())
  const ul = container.querySelector('ul')
  const li = container.querySelectorAll('li')
  li[0].focus()

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[1])
  expect(li[0].getAttribute('tabindex')).toEqual('-1')
  expect(li[1].getAttribute('tabindex')).toEqual('0')
  expect(li[2].getAttribute('tabindex')).toEqual('-1')

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[2])

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(document.activeElement).toEqual(li[1])

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(document.activeElement).toEqual(li[0])

  fireEvent.keyDown(ul, { key: 'ArrowRight' })
  expect(document.activeElement).toEqual(li[1])

  fireEvent.keyDown(ul, { key: 'ArrowLeft' })
  expect(document.activeElement).toEqual(li[0])

  fireEvent.keyDown(ul, { key: 'End' })
  expect(document.activeElement).toEqual(li[2])

  fireEvent.keyDown(ul, { key: 'Home' })
  expect(document.activeElement).toEqual(li[0])
})

it('should navigate wrapping around first and last items when specied', () => {
  const { container } = render(createComponent({ wrapAround: true }))
  const ul = container.querySelector('ul')
  const li = container.querySelectorAll('li')
  li[0].focus()

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(document.activeElement).toEqual(li[2])

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[0])
})

it('should manave focus only on specified items', () => {
  const { container } = render(
    createComponent({
      getItems: root => Array.from(root.querySelectorAll('li')).slice(0, 2),
    })
  )
  const ul = container.querySelector('ul')
  const li = container.querySelectorAll('li')

  expect(li[0].getAttribute('tabindex')).toEqual('0')
  expect(li[1].getAttribute('tabindex')).toEqual('-1')
  expect(li[2].getAttribute('tabindex')).toBeFalsy()

  li[0].focus()
  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[1])
})

it('should allow override of navigation keys', () => {
  const { container } = render(
    createComponent({
      nextKeys: ['S', 'D'],
      prevKeys: ['W', 'A'],
      firstKeys: ['['],
      lastKeys: [']'],
    })
  )
  const ul = container.querySelector('ul')
  const li = container.querySelectorAll('li')
  li[0].focus()

  fireEvent.keyDown(ul, { key: 'S' })
  expect(document.activeElement).toEqual(li[1])
  fireEvent.keyDown(ul, { key: 'D' })
  expect(document.activeElement).toEqual(li[2])

  fireEvent.keyDown(ul, { key: 'W' })
  expect(document.activeElement).toEqual(li[1])
  fireEvent.keyDown(ul, { key: 'A' })
  expect(document.activeElement).toEqual(li[0])

  fireEvent.keyDown(ul, { key: ']' })
  expect(document.activeElement).toEqual(li[2])

  fireEvent.keyDown(ul, { key: '[' })
  expect(document.activeElement).toEqual(li[0])
})
