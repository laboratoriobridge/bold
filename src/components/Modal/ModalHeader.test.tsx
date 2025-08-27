import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createTheme, ThemeContext } from '../../styles'
import { LocaleContext } from '../../i18n/LocaleContext'
import ptBr from '../../i18n/locales/pt-BR'
import { ModalContextProps, ModalContextProvider } from '../../hooks/useModalContext'
import { Modal } from './Modal'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalHeaderIcon } from './ModalHeaderIcon'

jest.mock('./ModalHeaderIcon', () => ({
  ModalHeaderIcon: jest.fn((props) => <div {...props} />),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

const mockContextValue: ModalContextProps = {
  bodyRef: { current: document.createElement('div') },
  scroll: 'body',
}

describe('ModalHeader', () => {
  describe('basic rendering', () => {
    it('should render correctly', () => {
      const { container } = render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContextProvider>
      )
      expect(container).toMatchSnapshot()
    })

    it('should render the title when "title" prop is provided', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContextProvider>
      )
      expect(screen.getByText('title')).toBeInTheDocument()
    })

    it('should render the subtitle when "subtitle" prop is provided', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' subtitle='subtitle' />
        </ModalContextProvider>
      )
      expect(screen.getByText('subtitle')).toBeInTheDocument()
    })

    it('should render only the title when only "title" prop is provided', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContextProvider>
      )
      const texts = screen.getAllByText('title')
      expect(texts).toHaveLength(1)
      expect(screen.getByTestId('modal-header').textContent).toBe('title')
    })
  })

  describe('header box shadow', () => {
    it("should not apply shadow to ModalHeader when scroll is 'full' and content is not overflowing", () => {
      const { getByTestId } = render(
        <Modal open scroll='full'>
          <ModalHeader title='Modal title' />
          <ModalBody>Short content</ModalBody>
        </Modal>
      )
      const modalHeader = getByTestId('modal-header')
      expect(getComputedStyle(modalHeader).boxShadow).toBe('')
    })

    it("should not apply shadow to ModalHeader when scroll is 'full' and content is overflowing", () => {
      const theme = createTheme()

      const createComponent = () => (
        <ThemeContext.Provider value={theme}>
          <Modal open scroll='full'>
            <ModalHeader title='Modal title' />
            <ModalBody data-testid='modal-body'>
              <div>Long content</div>
            </ModalBody>
          </Modal>
        </ThemeContext.Provider>
      )

      const { getByTestId, rerender } = render(createComponent())

      const modalBody = getByTestId('modal-body')

      Object.defineProperty(modalBody, 'scrollHeight', { value: 500 })
      Object.defineProperty(modalBody, 'clientHeight', { value: 300 })

      rerender(createComponent())

      const modalHeader = screen.getByTestId('modal-header')

      expect(getComputedStyle(modalHeader).boxShadow).toBe('')
    })

    it("should not apply shadow to ModalHeader when scroll is 'body' and content is not overflowing", () => {
      const { getByTestId } = render(
        <Modal open>
          <ModalHeader title='Modal title' />
          <ModalBody>Short content</ModalBody>
        </Modal>
      )
      const modalHeader = getByTestId('modal-header')
      expect(getComputedStyle(modalHeader).boxShadow).toBe('')
    })

    it("should apply shadow to ModalHeader when scroll is 'body' and content is overflowing", async () => {
      const theme = createTheme()

      const createComponent = () => (
        <ThemeContext.Provider value={theme}>
          <Modal open>
            <ModalHeader title='Modal title' />
            <ModalBody data-testid='modal-body'>
              <div>Long content</div>
            </ModalBody>
          </Modal>
        </ThemeContext.Provider>
      )

      const { getByTestId, rerender } = render(createComponent())

      const modalBody = getByTestId('modal-body')

      Object.defineProperty(modalBody, 'scrollHeight', { value: 500 })
      Object.defineProperty(modalBody, 'clientHeight', { value: 300 })

      rerender(createComponent())

      const modalHeader = screen.getByTestId('modal-header')

      expect(getComputedStyle(modalHeader).boxShadow).toBe('0 1px 5px 0 rgba(0,0,0,0.12),0 2px 1px 0 rgba(0,0,0,0.04)')
    })
  })

  describe('close button', () => {
    it('should render close button when "hasCloseIcon" is true', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon />
        </ModalContextProvider>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render close button when "hasCloseIcon" is not provided (default true)', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContextProvider>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should not render close button when "hasCloseIcon" is false', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} />
        </ModalContextProvider>
      )
      expect(screen.queryByRole('button')).toBeNull()
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is true', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' onCloseButtonClick={onCloseMock} hasCloseIcon />
        </ModalContextProvider>
      )
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is not provided (default true)', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' onCloseButtonClick={onCloseMock} />
        </ModalContextProvider>
      )
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should not call onCloseButtonClick when "hasCloseIcon" is false', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} onCloseButtonClick={onCloseMock} />
        </ModalContextProvider>
      )
      expect(screen.queryByRole('button')).toBeNull()
      expect(onCloseMock).not.toHaveBeenCalled()
    })

    it('should allow message customization via locale context', () => {
      const { getByRole } = render(
        <LocaleContext.Provider value={ptBr}>
          <ModalContextProvider value={mockContextValue}>
            <ModalHeader title='Modal container' />
          </ModalContextProvider>
        </LocaleContext.Provider>
      )
      expect(getByRole('button').getAttribute('aria-label')).toEqual(ptBr.modal.close)
    })
  })

  describe('Header icon', () => {
    it('does not render ModalHeaderIcon when icon is not provided', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} />
        </ModalContextProvider>
      )

      const svgTags = document.querySelectorAll('svg')
      expect(svgTags.length).toBe(0)
    })

    it('passes all expected props correctly to ModalHeaderIcon', () => {
      render(
        <ModalContextProvider value={mockContextValue}>
          <ModalHeader title='title' icon='infoCircleOutline' />
        </ModalContextProvider>
      )

      expect(ModalHeaderIcon).toHaveBeenCalledWith(
        expect.objectContaining({
          icon: 'infoCircleOutline',
        }),
        {}
      )
    })
  })
})
