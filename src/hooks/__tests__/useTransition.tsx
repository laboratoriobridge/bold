import { act, render } from '@testing-library/react'
import React from 'react'

import { useTransition } from '../useTransition'

function TestComponent({ enter, enterTimeout = 1, exitTimeout = 1 }) {
  const state = useTransition(enter, { enterTimeout, exitTimeout })
  return <>{state}</>
}

it('should return "exited" state when "enter" is false', () => {
  const { container } = render(<TestComponent enter={false} />)
  expect(container.textContent).toEqual('exited')
})

it('should return "entered" state when "enter" is true', () => {
  const { container } = render(<TestComponent enter={true} />)
  expect(container.textContent).toEqual('entered')
})

it('should change to "entering" state when "enter" changes to "true"', () => {
  const { container, rerender } = render(<TestComponent enter={false} />)
  rerender(<TestComponent enter={true} />)
  expect(container.textContent).toEqual('entering')
})

it('should change to "entered" state when "enter" changes and "enterTimeout" has fired', () => {
  jest.useFakeTimers()
  const { container, rerender } = render(<TestComponent enter={false} enterTimeout={100} />)
  rerender(<TestComponent enter={true} enterTimeout={100} />)

  act(() => jest.advanceTimersByTime(99))
  expect(container.textContent).toEqual('entering')

  act(() => jest.advanceTimersByTime(100))
  expect(container.textContent).toEqual('entered')
})

it('should change to "exiting" state when "enter" changes to "false"', () => {
  const { container, rerender } = render(<TestComponent enter={true} />)
  rerender(<TestComponent enter={false} />)
  expect(container.textContent).toEqual('exiting')
})

it('should change to "exited" state when "enter" changes and "exitTimeout" has fired', () => {
  jest.useFakeTimers()
  const { container, rerender } = render(<TestComponent enter={true} exitTimeout={100} />)
  rerender(<TestComponent enter={false} exitTimeout={100} />)

  act(() => jest.advanceTimersByTime(99))
  expect(container.textContent).toEqual('exiting')

  act(() => jest.advanceTimersByTime(100))
  expect(container.textContent).toEqual('exited')
})

it('should clear enter timeout when unmounted', () => {
  const { unmount, rerender } = render(<TestComponent enter={false} />)
  rerender(<TestComponent enter={true} />)
  unmount()
})

it('should clear exit timeout when unmounted', () => {
  const { unmount, rerender } = render(<TestComponent enter={true} />)
  rerender(<TestComponent enter={false} />)
  unmount()
})
