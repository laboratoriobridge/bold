import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Tooltip, TooltipProps } from './Tooltip'

jest.mock('../../util/string')

beforeEach(() => render(<div id='portal-root' />))

const createComponent = (props: Partial<TooltipProps> = {}) => {
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

it('should render correctly', () => {
  const { getByText } = render(createComponent())
  expect(document.body).toMatchSnapshot()

  fireEvent.focus(getByText('Testing'))
  expect(document.body).toMatchSnapshot()
})

it('should not render tooltip if text if null or empty', () => {
  const { container, getByText } = render(createComponent({ text: '' }))
  expect(document.getElementById('portal-root').innerHTML).toEqual('')

  fireEvent.focus(getByText('Testing'))
  expect(document.getElementById('portal-root').innerHTML).toEqual('')

  expect(container.querySelector('span').getAttribute('aria-describedby')).toBeFalsy()
})

it('should show tooltip when mouse enters component', () => {
  const { getByText } = render(createComponent())
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
  fireEvent.mouseEnter(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')
})

it('should show tooltip when focus component', () => {
  const { getByText } = render(createComponent())
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
  fireEvent.focus(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')
})

it('should hide tooltip when mouse leaves component', () => {
  const { getByText } = render(createComponent())
  fireEvent.mouseEnter(getByText('Testing'))
  fireEvent.mouseLeave(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
})

it('should hide tooltip when blur component', () => {
  const { getByText } = render(createComponent())
  fireEvent.focus(getByText('Testing'))
  fireEvent.blur(getByText('Testing'))
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
})

it('should compose onMouseEnter, onMouseLeave, onFocus and onBlur functions', () => {
  const focus = jest.fn()
  const blur = jest.fn()
  const mouseEnter = jest.fn()
  const mouseLeave = jest.fn()
  const { getByText } = render(
    <Tooltip text='Tooltip text' offset={2} placement='bottom-start'>
      <button onFocus={focus} onBlur={blur} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        Testing
      </button>
    </Tooltip>
  )

  const target = getByText('Testing')
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')

  fireEvent.focus(target)
  expect(focus).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')

  fireEvent.blur(target)
  expect(blur).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')

  fireEvent.mouseEnter(target)
  expect(mouseEnter).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('false')

  fireEvent.mouseLeave(target)
  expect(mouseLeave).toHaveBeenCalledTimes(1)
  expect(document.body.querySelector('[role="tooltip"]').getAttribute('aria-hidden')).toEqual('true')
})
