import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createTheme, ThemeContext } from '../../styles'
import { LocaleContext } from '../../i18n/LocaleContext'
import ptBr from '../../i18n/locales/pt-BR'
import { Modal } from './Modal'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalHeaderIcon } from './ModalHeaderIcon'
import { ModalContext, ModalScroll } from './Modal'

jest.mock('./ModalHeaderIcon', () => ({
  ModalHeaderIcon: jest.fn((props) => <div {...props} />),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

const mockBodyRef = { current: document.createElement('div') }
const mockContextValue = {
  bodyRef: mockBodyRef,
  scroll: 'body' as ModalScroll,
}

describe('ModalHeader', () => {
  describe('basic rendering', () => {
    it('should render correctly', () => {
      const mockBodyRef = { current: document.createElement('div') }
      const mockContextValue = {
        bodyRef: mockBodyRef,
        scroll: 'body' as ModalScroll,
      }

      const { container } = render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContext.Provider>
      )
      expect(container).toMatchSnapshot()
    })

    it('should render the title when "title" prop is provided', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContext.Provider>
      )
      expect(screen.getByText('title')).toBeInTheDocument()
    })

    it('should render the subtitle when "subtitle" prop is provided', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' subtitle='subtitle' />
        </ModalContext.Provider>
      )
      expect(screen.getByText('subtitle')).toBeInTheDocument()
    })

    it('should render only the title when only "title" prop is provided', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContext.Provider>
      )
      const texts = screen.getAllByText('title')
      expect(texts).toHaveLength(1)
      expect(screen.getByTestId('modal-header').textContent).toBe('title')
    })
  })

  describe('header box shadow', () => {
    it("should not apply shadow to ModalHeader when scroll is 'full' and content is not overflowing", () => {
      const { getByTestId } = render(
        <Modal open scroll='full' title='Modal title'>
          <ModalBody>Short content</ModalBody>
        </Modal>
      )
      const modalHeader = getByTestId('modal-header')
      expect(getComputedStyle(modalHeader).boxShadow).toBe('')
    })

    it("should not apply shadow to ModalHeader when scroll is 'full' and content is overflowing", () => {
      const { getByTestId } = render(
        <Modal open title='Modal title'>
          <ModalBody>Short content</ModalBody>
        </Modal>
      )
      const modalHeader = getByTestId('modal-header')
      expect(getComputedStyle(modalHeader).boxShadow).toBe('')
    })

    it("should not apply shadow to ModalHeader when scroll is 'body' and content is not overflowing", () => {
      const { getByTestId } = render(
        <Modal open title='Modal title'>
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
          <Modal open title='Modal title'>
            <ModalBody data-testid='modal-body'>
              <div>Content</div>
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
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon />
        </ModalContext.Provider>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render close button when "hasCloseIcon" is not provided (default true)', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' />
        </ModalContext.Provider>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should not render close button when "hasCloseIcon" is false', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} />
        </ModalContext.Provider>
      )
      expect(screen.queryByRole('button')).toBeNull()
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is true', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' onCloseButtonClick={onCloseMock} hasCloseIcon />
        </ModalContext.Provider>
      )
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is not provided (default true)', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' onCloseButtonClick={onCloseMock} />
        </ModalContext.Provider>
      )
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should not call onCloseButtonClick when "hasCloseIcon" is false', () => {
      const onCloseMock = jest.fn()
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} onCloseButtonClick={onCloseMock} />
        </ModalContext.Provider>
      )
      expect(screen.queryByRole('button')).toBeNull()
      expect(onCloseMock).not.toHaveBeenCalled()
    })

    it('should allow message customization via locale context', () => {
      const { getByRole } = render(
        <LocaleContext.Provider value={ptBr}>
          <ModalContext.Provider value={mockContextValue}>
            <ModalHeader title='Modal container' />
          </ModalContext.Provider>
        </LocaleContext.Provider>
      )
      expect(getByRole('button').getAttribute('aria-label')).toEqual(ptBr.modal.close)
    })
  })

  describe('Header icon', () => {
    it('does not render ModalHeaderIcon when icon is not provided', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' hasCloseIcon={false} />
        </ModalContext.Provider>
      )

      const svgTags = document.querySelectorAll('svg')
      expect(svgTags.length).toBe(0)
    })

    it('passes all expected props correctly to ModalHeaderIcon', () => {
      render(
        <ModalContext.Provider value={mockContextValue}>
          <ModalHeader title='title' icon='infoCircleOutline' />
        </ModalContext.Provider>
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
