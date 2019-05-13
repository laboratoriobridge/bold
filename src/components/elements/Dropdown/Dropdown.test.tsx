import React, { createRef } from 'react'
import { fireEvent, render, wait } from 'react-testing-library'

import * as stringUtils from '../../../util/string'

import { Dropdown, DropdownProps } from './Dropdown'
import { DropdownItem } from './DropdownItem'

const stringUtilsModule = stringUtils as any
stringUtilsModule.randomStr = jest.fn(() => 'abc')

// tslint:disable jsx-no-lambda

const createDropdown = (props: Partial<DropdownProps> = {}) => {
  const anchorRef = createRef<HTMLButtonElement>()
  return (
    <>
      <button ref={anchorRef}>Anchor</button>
      <Dropdown anchorRef={anchorRef} open={false} {...props}>
        <DropdownItem>Item #1</DropdownItem>
        <DropdownItem>Item #2</DropdownItem>
      </Dropdown>
    </>
  )
}

it('should render correctly when closed', () => {
  render(createDropdown())
  expect(document.body).toMatchSnapshot()
})

it('should render correctly when open', () => {
  render(createDropdown({ open: true }))
  expect(document.body).toMatchSnapshot()
})

it('should accept popper props', () => {
  render(createDropdown({ open: true, popperProps: { placement: 'top-start' } }))
  expect(document.body).toMatchSnapshot()
})

it('should control aria attributes on anchor element', () => {
  const { getByText, rerender } = render(createDropdown({ open: false }))
  const anchor = getByText('Anchor')

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toBeFalsy()
  expect(anchor.getAttribute('aria-controls')).toBeFalsy()

  rerender(createDropdown({ open: true }))

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toEqual('true')
  expect(anchor.getAttribute('aria-controls')).toEqual('dropdown-abc')
})

it('should call "onClose" when "Escape" is pressed and dropdown is open', () => {
  const close = jest.fn()
  const { rerender } = render(createDropdown({ open: false, onClose: close }))

  expect(close).not.toHaveBeenCalled()

  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).not.toHaveBeenCalled()

  rerender(createDropdown({ open: true, onClose: close }))
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)

  rerender(createDropdown({ open: false, onClose: close }))
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)
})

it('should call "onClose" when focus go outside menu', async () => {
  const close = jest.fn()
  render(createDropdown({ open: true, onClose: close }))

  expect(document.activeElement).toEqual(document.body)

  expect(close).not.toHaveBeenCalled()

  fireEvent.blur(document.body.querySelector('ul'))
  await wait()
  expect(close).toHaveBeenCalledTimes(1)
})

it('should focus the first menu item when dropdown is opened', async () => {
  const { rerender } = render(createDropdown({ open: false }))

  expect(document.activeElement).toEqual(document.body)

  rerender(createDropdown({ open: true }))
  await wait(() => {
    expect(document.activeElement).toEqual(document.body.querySelectorAll('li')[0])
  })
})

it('should call "onClose" if menu is clicked and "autoclose" is true', () => {
  const close = jest.fn()
  const { rerender } = render(createDropdown({ open: true, onClose: close }))

  expect(close).toHaveBeenCalledTimes(0)
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)

  rerender(createDropdown({ open: true, onClose: close, autoclose: false }))
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)
})
