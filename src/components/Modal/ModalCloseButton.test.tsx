import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ModalContextValue } from '../../hooks'
import { ModalContextProvider } from '../../hooks/useModalContext'
import { ModalCloseButton } from './ModalCloseButton'

it('should render correctly', () => {
  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
  }

  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalCloseButton onClick={jest.fn()} />
    </ModalContextProvider>
  )

  expect(container).toMatchInlineSnapshot(`
    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5rem;
      color: #24252E;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: all .2s;
      transition: all .2s;
      font-weight: bold;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 4px;
      color: #24252E;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-size: 0.875rem;
      padding: calc(0.25rem - 1px) calc(0.5rem - 1px);
    }

    .emotion-1 > span {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }

    .emotion-1:not(:disabled):active {
      box-shadow: inset 0 2px 8px 0 rgba(0,0,0,0.1);
    }

    .emotion-1:focus {
      outline: none;
      box-shadow: 0 0 0 2px #0069D0;
    }

    .emotion-1:not(:disabled):hover {
      background-color: rgba(58,58,71,0.1);
    }

    .emotion-0 {
      fill: currentColor;
      font-size: 1.5rem;
    }

    <div>
      <button
        aria-label="Close"
        class="emotion-1"
        title="Close"
        type="button"
      >
        <span>
          <svg
            aria-hidden="true"
            class="emotion-0"
            height="1em"
            role="img"
            viewBox="0 0 24 24"
            width="1em"
          >
            <path
              clip-rule="evenodd"
              d="M8.071 6.657l4.243 4.242 4.242-4.242c.464-.48.935-.48 1.415 0s.48.95 0 1.414l-4.243 4.243 4.243 4.242c.471.472.471.943 0 1.415-.472.471-.943.471-1.415 0l-4.242-4.243L8.07 17.97c-.46.482-.932.482-1.414 0-.482-.483-.482-.954 0-1.415l4.242-4.242L6.657 8.07c-.472-.47-.472-.942 0-1.414s.943-.472 1.414 0v.001z"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  `)
})

it('should apply external styles prop', () => {
  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
  }

  const { getByRole } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalCloseButton onClick={jest.fn()} style={{ backgroundColor: 'red' }} />
    </ModalContextProvider>
  )

  expect(getByRole('button')).toHaveStyle('background-color: red')
})

it('should call prop onClick when provided and no context onClose exists', () => {
  const onClickMock = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
  }

  const { getByRole } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalCloseButton onClick={onClickMock} />
    </ModalContextProvider>
  )

  expect(onClickMock).not.toHaveBeenCalled()
  fireEvent.click(getByRole('button'))
  expect(onClickMock).toHaveBeenCalledTimes(1)
})

it('should call context onClose when no prop onClick is provided', () => {
  const onCloseMock = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
    onClose: onCloseMock,
  }

  const { getByRole } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalCloseButton />
    </ModalContextProvider>
  )

  fireEvent.click(getByRole('button'))
  expect(onCloseMock).toHaveBeenCalledTimes(1)
})

it('should call both prop onClick and context onClose when both are provided', () => {
  const onCloseMock = jest.fn()
  const onClickMock = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
    onClose: onCloseMock,
  }

  const { getByRole } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalCloseButton onClick={onClickMock} />
    </ModalContextProvider>
  )

  fireEvent.click(getByRole('button'))
  expect(onCloseMock).toHaveBeenCalledTimes(1)
  expect(onClickMock).toHaveBeenCalledTimes(1)
})
