import { fireEvent, render, act, RenderResult, RenderOptions } from '@testing-library/react'
import React from 'react'

import { Tooltip, TooltipProps } from './Tooltip'

jest.mock('../../util/string')

beforeEach(() => render(<div id='portal-root' />))

async function actRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
  let renderResult: RenderResult
  await act(async () => {
    renderResult = render(ui, options)
  })
  return renderResult
}

const TooltipTest = (props: Partial<TooltipProps>) => {
  return (
    <Tooltip
      text='Tooltip text'
      offset={2}
      placement='bottom-start'
      container={document.getElementById('portal-root')}
      {...props}
    >
      <span>Testing</span>
    </Tooltip>
  )
}

it('should render correctly', async () => {
  const { getByText } = await actRender(<TooltipTest />)
  expect(document.body).toMatchSnapshot()

  fireEvent.focus(getByText('Testing'))
  expect(document.body).toMatchSnapshot()
})

it('should not render tooltip if text if null or empty', async () => {
  const { container, getByText } = await actRender(<TooltipTest text='' />)
  expect(document.getElementById('portal-root').innerHTML).toEqual('')

  fireEvent.focus(getByText('Testing'))
  expect(document.getElementById('portal-root').innerHTML).toEqual('')

  expect(container.querySelector('span').getAttribute('aria-describedby')).toBeFalsy()
})

it('should show tooltip when pointer enters component', async () => {
  const { getByText } = await actRender(<TooltipTest />)
  expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
  fireEvent.pointerOver(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')
})

it('should show tooltip when focus component', async () => {
  const { getByText } = await actRender(<TooltipTest />)
  expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()
  fireEvent.focus(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')
})

it('should hide tooltip when pointer leaves component', async () => {
  const { getByText } = await actRender(<TooltipTest />)
  fireEvent.pointerOver(getByText('Testing'))
  fireEvent.pointerOver(document)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
})

it('should hide tooltip when blur component', async () => {
  const { getByText } = await actRender(<TooltipTest />)
  fireEvent.focus(getByText('Testing'))
  fireEvent.blur(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
})

it('should compose onPointerEnter, onPointerLeave, onFocus and onBlur functions', async () => {
  const focus = jest.fn()
  const blur = jest.fn()
  const pointerEnter = jest.fn()
  const { getByText } = await actRender(
    <Tooltip text='Tooltip text' offset={2} placement='bottom-start'>
      <button onFocus={focus} onBlur={blur} onPointerEnter={pointerEnter}>
        Testing
      </button>
    </Tooltip>
  )

  const target = getByText('Testing')
  expect(document.body.querySelector('[role="tooltip"]')).toBeFalsy()

  await act(async () => {
    fireEvent.focus(target)
  })
  expect(focus).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')

  fireEvent.blur(target)
  expect(blur).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')

  fireEvent.pointerOver(target)
  expect(pointerEnter).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')
})

it('should switch "title" and "aria-describedby" props on target element when tooltip is visible/invisible', async () => {
  const { container } = await actRender(<TooltipTest text='lorem' />)
  const target = container.querySelector('span')

  expect(target.getAttribute('aria-describedby')).toEqual(null)
  expect(target.getAttribute('title')).toEqual('lorem')

  await act(async () => {
    fireEvent.focus(target)
  })
  expect(target.getAttribute('aria-describedby')).toEqual('tooltip-abc')
  expect(target.getAttribute('title')).toEqual(null)
})
