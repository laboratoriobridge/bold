import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { findDOMNode } from 'react-dom'
import { Modal, ModalProps } from './Modal'

jest.mock('../../util/string')

describe('Modal', () => {
  it('should render correctly when closed', () => {
    render(<Modal open={false}>Testing.</Modal>)
    expect(document.body).toMatchSnapshot()
  })

  it('should render correctly when opened', () => {
    render(<Modal open={true}>Testing.</Modal>)
    expect(document.body).toMatchSnapshot()
  })

  it('should render on a portal', () => {
    const { container } = render(<Modal open={true}>Testing.</Modal>)
    expect(container.innerHTML).toBeFalsy()
    expect(document.body).toBeTruthy()
  })

  it('should accept "style" prop and pass down to ModalContainer', () => {
    render(
      <Modal open={true} style={{ color: 'red' }}>
        Testing.
      </Modal>
    )
    expect(document.body).toMatchSnapshot()
  })

  it('should accept "depthLevel" prop and pass down to ModalContainer', () => {
    render(
      <Modal open={true} depthLevel={2}>
        Testing.
      </Modal>
    )
    expect(document.body).toMatchSnapshot()
  })

  it(`should'n add "overflow: hidden" property to document when manageOverflow is false`, () => {
    render(
      <Modal open={true} manageOverflow={false}>
        Testing.
      </Modal>
    )
    expect(document.body.classList).not.toContainEqual('oveflow')
    expect(document.body).toMatchSnapshot()
  })

  it('should override ModalContainer props and pass down props to it', () => {
    render(
      <Modal open={true} role='alertdialog'>
        Testing.
      </Modal>
    )
    expect(document.body.querySelector('[aria-modal="true"]').getAttribute('role')).toEqual('alertdialog')
  })

  describe('sizes', () => {
    it('should accept the "small" size and render accordingly', () => {
      render(
        <Modal open={true} size='small'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })

    it('should accept the "large" size and render accordingly', () => {
      render(
        <Modal open={true} size='large'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })

    it('should accept the "auto" size and render accordingly', () => {
      render(
        <Modal open={true} size='auto'>
          Testing.
        </Modal>
      )
      expect(document.body).toMatchSnapshot()
    })
  })
})

it('should call "onClose" when backdrop is clicked and closeOnBackdropClick prop is true', () => {
  const handleClose = jest.fn()
  const createComponent = (props: Partial<ModalProps> = {}) => (
    <Modal open={true} onClose={handleClose} {...props}>
      Modal
    </Modal>
  )

  const { rerender, getByTestId } = render(createComponent())
  const backdrop = getByTestId('backdrop')
  expect(handleClose).not.toHaveBeenCalled()
  fireEvent.click(backdrop)
  expect(handleClose).toHaveBeenCalledTimes(1)

  rerender(createComponent({ closeOnBackdropClick: false }))
  fireEvent.click(backdrop)
  expect(handleClose).toHaveBeenCalledTimes(1)
})

it('should call "onClose" when key "Escape" is pressed and modal is open', () => {
  const handleClose = jest.fn()
  const createComponent = (props: Partial<ModalProps> = {}) => (
    <Modal open={true} onClose={handleClose} {...props}>
      Modal
    </Modal>
  )

  const { rerender } = render(createComponent())
  expect(handleClose).not.toHaveBeenCalled()
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(handleClose).toHaveBeenCalledTimes(1)

  rerender(createComponent({ open: false }))
  fireEvent.keyDown(document.body, { key: 'Escape' })
  expect(handleClose).toHaveBeenCalledTimes(1)
})

it('should have a focus on first element when opened', async () => {
  const createComponent = (props: Partial<ModalProps> = {}) => (
    <>
      <button>Open</button>
      <Modal open={false} {...props}>
        Modal
        <button>First button</button>
      </Modal>
    </>
  )

  const { rerender, getByText } = render(createComponent())
  const button = getByText('Open')
  button.focus()
  expect(document.activeElement).toEqual(button)

  rerender(createComponent({ open: true }))
  const dialog = document.body.querySelector('[role="dialog"]')
  await waitFor(() => {
    expect(document.activeElement).toEqual(dialog.firstElementChild)
  })
})

it('should accept "containerRef" prop and pass down to ModalContainer', () => {
  const ref = React.createRef<HTMLDivElement>()
  render(
    <Modal open={true} containerRef={ref}>
      Testing.
    </Modal>
  )
  expect(document.body.querySelector('[aria-modal="true"]')).toBe(findDOMNode(ref.current))
})
