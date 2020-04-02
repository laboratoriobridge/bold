import { render, fireEvent } from '@testing-library/react'
import waait from 'waait'
import React, { createRef } from 'react'
import { useClickOutside } from '../useClickOutside'

const TestComponent = ({ onClickOutside, refs: { outsideRef, insideRef1, insideRef2 }, target }) => {
  useClickOutside(target, onClickOutside)

  return (
    <div ref={outsideRef} data-testid='outside-div'>
      Outside
      <div ref={insideRef1} data-testid='inside-div-1'>
        <span>Inside 1</span>
        <button data-testid='inside-button'>Inside button</button>
      </div>
      <div ref={insideRef2} data-testid='inside-div-2'>
        Inside 2
      </div>
    </div>
  )
}

it('should execute callback action when clicked outside target ref', async () => {
  const outsideRef = createRef<HTMLElement>()
  const insideRef1 = createRef<HTMLElement>()
  const insideRef2 = createRef<HTMLElement>()
  const callback = jest.fn()

  const { getByTestId } = render(
    <TestComponent refs={{ outsideRef, insideRef1, insideRef2 }} target={insideRef1} onClickOutside={callback} />
  )
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-div-1'))
  fireEvent.mouseUp(getByTestId('inside-div-1'))
  await waait()
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-button'))
  fireEvent.mouseUp(getByTestId('inside-button'))
  await waait()
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-div-2'))
  fireEvent.mouseUp(getByTestId('inside-div-2'))
  await waait()
  expect(callback).toHaveBeenCalledTimes(1)

  fireEvent.mouseDown(getByTestId('outside-div'))
  fireEvent.mouseUp(getByTestId('outside-div'))
  await waait()
  expect(callback).toHaveBeenCalledTimes(2)
})

it('should execute callback action when clicked outside all target refs', async () => {
  const outsideRef = createRef<HTMLElement>()
  const insideRef1 = createRef<HTMLElement>()
  const insideRef2 = createRef<HTMLElement>()
  const callback = jest.fn()

  const { getByTestId } = render(
    <TestComponent
      refs={{ outsideRef, insideRef1, insideRef2 }}
      target={[insideRef1, insideRef2]}
      onClickOutside={callback}
    />
  )
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-div-1'))
  fireEvent.mouseUp(getByTestId('inside-div-1'))
  await waait()
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-button'))
  fireEvent.mouseUp(getByTestId('inside-button'))
  await waait()
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('inside-div-2'))
  fireEvent.mouseUp(getByTestId('inside-div-2'))
  await waait()
  expect(callback).not.toHaveBeenCalled()

  fireEvent.mouseDown(getByTestId('outside-div'))
  fireEvent.mouseUp(getByTestId('outside-div'))
  await waait()
  expect(callback).toHaveBeenCalledTimes(1)
})
