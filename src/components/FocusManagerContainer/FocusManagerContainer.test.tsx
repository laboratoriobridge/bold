import { fireEvent, render, wait } from '@testing-library/react'
import React from 'react'

import { act } from 'react-dom/test-utils'
import { FocusManagerContainer } from './FocusManagerContainer'

jest.useFakeTimers()

it('should render children', () => {
  const { container } = render(
    <FocusManagerContainer>
      <span>Children</span>
    </FocusManagerContainer>
  )
  expect(container).toMatchSnapshot()
})

it('should call onFocusIn prop when focus enter the first element of the container', () => {
  const focusIn = jest.fn()
  const { container } = render(
    <FocusManagerContainer onFocusIn={focusIn}>
      <input id='input1' />
      <input id='input2' />
    </FocusManagerContainer>
  )
  expect(focusIn).not.toHaveBeenCalled()
  fireEvent.focus(container.querySelector('#input1'))
  expect(focusIn).toHaveBeenCalledTimes(1)
  fireEvent.focus(container.querySelector('#input2'))
  expect(focusIn).toHaveBeenCalledTimes(1)
})

it('should call onFocusOut prop when focus leaves the container', async () => {
  const focusOut = jest.fn()
  const { container } = render(
    <FocusManagerContainer onFocusOut={focusOut}>
      <input id='input1' />
      <input id='input2' />
    </FocusManagerContainer>
  )
  expect(focusOut).not.toHaveBeenCalled()

  fireEvent.focus(container.querySelector('#input1'))
  await wait()
  expect(focusOut).not.toHaveBeenCalled()

  fireEvent.focus(container.querySelector('#input2'))
  await wait()
  expect(focusOut).not.toHaveBeenCalled()

  fireEvent.blur(container.querySelector('#input2'))

  act(() => jest.runAllTimers())

  await wait()
  expect(focusOut).toHaveBeenCalledTimes(1)
})
