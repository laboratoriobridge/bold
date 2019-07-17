import { act, render } from '@testing-library/react'
import React from 'react'

import { useFocusContainer } from '../useFocusContainer'

it('should track the mount state of the component', async () => {
  jest.useFakeTimers()

  const focusIn = jest.fn()
  const focusOut = jest.fn()

  const Component = () => {
    const focusEvents = useFocusContainer({
      onFocusIn: focusIn,
      onFocusOut: focusOut,
    })

    return (
      <>
        <div {...focusEvents}>
          <button>Button</button>
          <input type='text' />
        </div>
        <span tabIndex={0}>Focusable span</span>
      </>
    )
  }

  const { container } = render(<Component />)
  expect(focusIn).toHaveBeenCalledTimes(0)
  expect(focusOut).toHaveBeenCalledTimes(0)

  container.querySelector('button').focus()
  act(() => jest.runAllTimers())
  expect(focusIn).toHaveBeenCalledTimes(1)
  expect(focusOut).toHaveBeenCalledTimes(0)

  container.querySelector('input').focus()
  act(() => jest.runAllTimers())
  expect(focusIn).toHaveBeenCalledTimes(1)
  expect(focusOut).toHaveBeenCalledTimes(0)

  container.querySelector('input').blur()
  container.querySelector('span').focus()
  act(() => jest.runAllTimers())
  expect(focusIn).toHaveBeenCalledTimes(1)
  expect(focusOut).toHaveBeenCalledTimes(1)

  container.querySelector('input').focus()
  act(() => jest.runAllTimers())
  expect(focusIn).toHaveBeenCalledTimes(2)
})
