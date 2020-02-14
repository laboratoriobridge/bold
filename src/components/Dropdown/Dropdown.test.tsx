import { fireEvent, render, wait } from '@testing-library/react'
import React, { createRef } from 'react'

import { Dropdown, DropdownProps } from './Dropdown'
import { DropdownItem } from './DropdownItem'

jest.mock('../../util/string')

const DropdownTest = (props: Partial<DropdownProps> = {}) => {
  const anchorRef = createRef<HTMLButtonElement>()
  return (
    <>
      <button ref={anchorRef}>Anchor</button>
      <Dropdown anchorRef={anchorRef} open={false} {...props}>
        <DropdownItem>Item #1</DropdownItem>
        <DropdownItem>Item #2</DropdownItem>
        <DropdownItem disabled>Item #3</DropdownItem>
      </Dropdown>
    </>
  )
}

it('should render correctly when closed', () => {
  render(<DropdownTest />)
  expect(document.body).toMatchSnapshot()
})

it('should render correctly when open', () => {
  render(<DropdownTest open={true} />)
  expect(document.body).toMatchSnapshot()
})

it('should accept popper props', () => {
  render(<DropdownTest open={true} popperProps={{ placement: 'top-start' }} />)
  expect(document.body).toMatchSnapshot()
})

it('should extend DropdownMenu props', () => {
  render(<DropdownTest open={true} aria-label='test' style={{ color: 'red' }} />)
  expect(document.body).toMatchSnapshot()
})

it('should control aria attributes on anchor element', () => {
  const { getByText, rerender } = render(<DropdownTest open={false} />)
  const anchor = getByText('Anchor')

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toBeFalsy()
  expect(anchor.getAttribute('aria-controls')).toBeFalsy()

  rerender(<DropdownTest open={true} />)

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toEqual('true')
  expect(anchor.getAttribute('aria-controls')).toEqual('dropdown-abc')
})

it('should call "onClose" when "Escape" is pressed and dropdown is open', () => {
  const close = jest.fn()
  const { rerender } = render(<DropdownTest open={false} onClose={close} />)

  expect(close).not.toHaveBeenCalled()

  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).not.toHaveBeenCalled()

  rerender(<DropdownTest open={true} onClose={close} />)
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)

  rerender(<DropdownTest open={false} onClose={close} />)
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)
})

it('should call "onClose" when focus go outside menu', async () => {
  const close = jest.fn()
  render(<DropdownTest open={true} onClose={close} />)

  expect(document.activeElement).toEqual(document.body)

  expect(close).not.toHaveBeenCalled()

  fireEvent.blur(document.body.querySelector('ul'))
  await wait()
  expect(close).toHaveBeenCalledTimes(1)
})

it('should call "onClose" when clicked outside menu and anchor', async () => {
  const close = jest.fn()
  render(<DropdownTest open={true} onClose={close} />)

  expect(document.activeElement).toEqual(document.body)
  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.querySelector('ul'))
  fireEvent.mouseUp(document.querySelector('ul'))
  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.querySelector('button'))
  fireEvent.mouseUp(document.querySelector('button'))
  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.body)
  fireEvent.mouseUp(document.body)
  await wait()
  expect(close).toHaveBeenCalledTimes(1)
})

it('should focus the first menu item when dropdown is opened', async () => {
  const { rerender } = render(<DropdownTest open={false} />)

  expect(document.activeElement).toEqual(document.body)

  rerender(<DropdownTest open={true} />)
  await wait(() => {
    expect(document.activeElement).toEqual(document.body.querySelectorAll('li')[0])
  })
})

it('should call "onClose" if menu is clicked and "autoclose" is true', () => {
  const close = jest.fn()
  const { rerender } = render(<DropdownTest open={true} onClose={close} />)

  expect(close).toHaveBeenCalledTimes(0)
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)

  rerender(<DropdownTest open={true} onClose={close} autoclose={false} />)
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)
})

it('should NOT call "onClose" if item clicked is disabled', () => {
  const close = jest.fn()
  render(<DropdownTest open={true} onClose={close} />)

  fireEvent.click(document.body.querySelectorAll('li')[2])
  expect(close).toHaveBeenCalledTimes(0)
})
