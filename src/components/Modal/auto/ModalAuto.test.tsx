import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ModalAuto } from './ModalAuto'

jest.mock('../../../util/string')

jest.useFakeTimers()

it('should render correctly', () => {
  const component = (
    <ModalAuto
      dispose={jest.fn()}
      render={() => <span>Body</span>}
      size='small'
      actions={[{ label: 'Confirm', onClick: jest.fn() }]}
    />
  )
  const { rerender } = render(component)
  rerender(component)
  expect(document.body).toMatchSnapshot()
})

it('should render correctly with depth', () => {
  const component = (
    <ModalAuto
      dispose={jest.fn()}
      render={() => <span>Body</span>}
      depthLevel={3}
      actions={[{ label: 'Confirm', onClick: jest.fn() }]}
    />
  )
  const { rerender } = render(component)
  rerender(component)
  expect(document.body).toMatchSnapshot()
})

it(`should render correctly without 'overflow hidden' prop in document classList`, () => {
  const component = (
    <ModalAuto
      dispose={jest.fn()}
      render={() => <span>Body</span>}
      manageOverflow={false}
      actions={[{ label: 'Confirm', onClick: jest.fn() }]}
    />
  )
  const { rerender } = render(component)
  rerender(component)
  expect(document.body.classList).not.toContainEqual('oveflow')
  expect(document.body).toMatchSnapshot()
})

it('should open when mounted', () => {
  const component = <ModalAuto dispose={jest.fn()} render={() => <span>Body</span>} />
  const { rerender } = render(component)
  rerender(component)
  expect(document.body.querySelector('[role="dialog"]')).toBeTruthy()
})

it('should close modal when a button is clicked', () => {
  const confirmHandler = jest.fn()
  const component = (
    <ModalAuto
      dispose={jest.fn()}
      render={() => <span>Body</span>}
      actions={[{ label: 'Cancel' }, { label: 'Confirm', kind: 'primary', onClick: confirmHandler }]}
    />
  )

  const { getByText, rerender } = render(component)
  rerender(component)

  fireEvent.click(getByText('Confirm'))
  expect(confirmHandler).toHaveBeenCalled()
  expect(document.body.querySelector('[role="dialog"]')).toBeFalsy()
})

it('should pass render props', () => {
  const renderModal = jest.fn()
  render(<ModalAuto dispose={jest.fn()} render={renderModal} />)
  expect(renderModal.mock.calls[0][0].close).toEqual(expect.any(Function))
})
