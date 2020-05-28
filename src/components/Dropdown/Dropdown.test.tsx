import { act, fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import React, { useState } from 'react'
import { Dropdown, DropdownProps } from './Dropdown'
import { DropdownItem } from './DropdownItem'

jest.mock('../../util/string')

const DropdownTest = (props: Partial<DropdownProps> = {}) => {
  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  return (
    <>
      <button ref={setAnchorRef}>Anchor</button>
      <Dropdown anchorRef={anchorRef} open={false} {...props}>
        <DropdownItem>Item #1</DropdownItem>
        <DropdownItem>Item #2</DropdownItem>
        <DropdownItem disabled>Item #3</DropdownItem>
      </Dropdown>
      <input data-testid='outsideElement' />
    </>
  )
}

it('should render correctly when closed', async () => {
  await act(async () => {
    render(<DropdownTest />)
  })
  expect(document.body).toMatchSnapshot()
})

it('should render correctly when open', async () => {
  await act(async () => {
    render(<DropdownTest open={true} />)
  })
  expect(document.body).toMatchSnapshot()
})

it('should accept popper props', async () => {
  await act(async () => {
    render(<DropdownTest open={true} popperProps={{ placement: 'top-start' }} />)
  })
  expect(document.body).toMatchSnapshot()
})

it('should extend DropdownMenu props', async () => {
  await act(async () => {
    render(<DropdownTest open={true} aria-label='test' style={{ color: 'red' }} />)
  })
  expect(document.body).toMatchSnapshot()
})

it('should control aria attributes on anchor element', async () => {
  let rerender: RenderResult['rerender']
  let getByText: RenderResult['getByText']

  await act(async () => {
    const result = render(<DropdownTest open={false} />)
    rerender = result.rerender
    getByText = result.getByText
  })

  const anchor = getByText('Anchor')

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toBeFalsy()
  expect(anchor.getAttribute('aria-controls')).toBeFalsy()

  await act(async () => {
    rerender(<DropdownTest open={true} />)
  })

  expect(anchor.getAttribute('aria-haspopup')).toEqual('true')
  expect(anchor.getAttribute('aria-expanded')).toEqual('true')
  expect(anchor.getAttribute('aria-controls')).toEqual('dropdown-abc')
})

it('should call "onClose" when "Escape" is pressed and dropdown is open', async () => {
  const close = jest.fn()

  let rerender: RenderResult['rerender']
  await act(async () => {
    rerender = render(<DropdownTest open={false} onClose={close} />).rerender
  })

  expect(close).not.toHaveBeenCalled()

  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).not.toHaveBeenCalled()

  await act(async () => {
    rerender(<DropdownTest open={true} onClose={close} />)
  })
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)

  await act(async () => {
    rerender(<DropdownTest open={false} onClose={close} />)
  })
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(close).toHaveBeenCalledTimes(1)
})

it('should call "onClose" when focus go outside menu', async () => {
  const close = jest.fn()
  let getByTestId
  await act(async () => {
    getByTestId = render(<DropdownTest open={true} onClose={close} />).getByTestId
  })

  expect(close).not.toHaveBeenCalled()

  getByTestId('outsideElement').focus()

  await waitFor(() => expect(close).toHaveBeenCalledTimes(1))
})

it('should call "onClose" when clicked outside menu and anchor', async () => {
  const close = jest.fn()
  await act(async () => {
    render(<DropdownTest open={true} onClose={close} />)
  })

  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.querySelector('ul'))
  fireEvent.mouseUp(document.querySelector('ul'))
  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.querySelector('button'))
  fireEvent.mouseUp(document.querySelector('button'))
  expect(close).not.toHaveBeenCalled()

  fireEvent.mouseDown(document.body)
  fireEvent.mouseUp(document.body)
  await waitFor(() => expect(close).toHaveBeenCalledTimes(1))
})

it('should focus the first menu item when dropdown is opened', async () => {
  let rerender: RenderResult['rerender']
  await act(async () => {
    rerender = render(<DropdownTest open={false} />).rerender
  })

  expect(document.activeElement).toEqual(document.body)

  await act(async () => {
    rerender(<DropdownTest open={true} />)
  })
  await waitFor(() => {
    expect(document.activeElement).toEqual(document.body.querySelectorAll('li')[0])
  })
})

it('should call "onClose" if menu is clicked and "autoclose" is true', async () => {
  const close = jest.fn()
  let rerender: RenderResult['rerender']
  await act(async () => {
    rerender = render(<DropdownTest open={true} onClose={close} />).rerender
  })

  expect(close).toHaveBeenCalledTimes(0)
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)

  rerender(<DropdownTest open={true} onClose={close} autoclose={false} />)
  fireEvent.click(document.body.querySelectorAll('li')[0])
  expect(close).toHaveBeenCalledTimes(1)
})

it('should NOT call "onClose" if item clicked is disabled', async () => {
  const close = jest.fn()

  await act(async () => {
    render(<DropdownTest open={true} onClose={close} />)
  })

  fireEvent.click(document.body.querySelectorAll('li')[2])
  expect(close).toHaveBeenCalledTimes(0)
})
