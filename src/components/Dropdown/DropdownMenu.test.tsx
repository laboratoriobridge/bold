import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { DropdownDivider } from './DropdownDivider'
import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

it('should render correctly', () => {
  const { container } = render(
    <DropdownMenu>
      <DropdownItem>Normal</DropdownItem>
      <DropdownItem disabled>Disabled</DropdownItem>
      <DropdownDivider />
      <DropdownItem type='danger'>Danger</DropdownItem>
    </DropdownMenu>
  )
  expect(container).toMatchSnapshot()
})

it('should provide a ref to the inner ul html element', () => {
  const ref = React.createRef<HTMLUListElement>()
  render(
    <DropdownMenu innerRef={ref}>
      <DropdownItem>Item</DropdownItem>
    </DropdownMenu>
  )
  expect(ref.current.tagName).toEqual('UL')
})

it('should have a roving tabIndex', () => {
  const { container } = render(
    <DropdownMenu>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem disabled>Item 2 - Disabled</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Item 3</DropdownItem>
      <DropdownItem type='danger'>Item 4 - Danger</DropdownItem>
    </DropdownMenu>
  )

  const ul = container.querySelector('ul')
  const li = container.querySelectorAll('li')

  li[0].focus()
  expect(document.activeElement).toEqual(li[0])
  expect(li[0].tabIndex).toEqual(0)
  expect(li[1].tabIndex).toEqual(-1)

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[3])
  expect(li[0].tabIndex).toEqual(-1)
  expect(li[1].tabIndex).toEqual(-1)
  expect(li[2].tabIndex).toEqual(-1)

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[4])
  expect(li[0].tabIndex).toEqual(-1)
  expect(li[1].tabIndex).toEqual(-1)
  expect(li[2].tabIndex).toEqual(-1)
  expect(li[3].tabIndex).toEqual(-1)
  expect(li[4].tabIndex).toEqual(0)

  fireEvent.keyDown(ul, { key: 'ArrowDown' })
  expect(document.activeElement).toEqual(li[4])
  expect(li[3].tabIndex).toEqual(-1)
  expect(li[4].tabIndex).toEqual(0)

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(document.activeElement).toEqual(li[3])
  expect(li[2].tabIndex).toEqual(-1)
  expect(li[3].tabIndex).toEqual(0)
  expect(li[4].tabIndex).toEqual(-1)

  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  fireEvent.keyDown(ul, { key: 'ArrowUp' })
  expect(document.activeElement).toEqual(li[0])
  expect(li[0].tabIndex).toEqual(0)
  expect(li[1].tabIndex).toEqual(-1)
})

it('should accept "style" props', () => {
  const { container } = render(<DropdownMenu style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})
