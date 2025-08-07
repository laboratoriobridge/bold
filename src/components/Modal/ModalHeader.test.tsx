import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
// import { createTheme, ThemeContext } from '../../styles'
import { LocaleContext } from '../../i18n/LocaleContext'
import ptBr from '../../i18n/locales/pt-BR'
import { ModalHeader } from './ModalHeader'
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
    // const theme = createTheme()
    // it('should apply box-shadow when "scroll" is set to "body" and modal body content is vertically overflowing', () => {
    //   render(
    //     <ThemeContext.Provider value={theme}>
    //       <ModalHeader title='title' header={{ showBottomBorder: true }} />
    //     </ThemeContext.Provider>
    //   )
    //   expect(screen.getByTestId('modal-header')).toHaveStyle(
    //     `box-shadow: 0 1px 5px 0 ${theme.pallete.divider},0 2px 1px -1px ${theme.pallete.divider}`
    //   )
    // })
    // it('should not apply box-shadow when "scroll" is set to "body" and modal body content is not vertically overflowing', () => {
    //   render(<ModalHeader title='title' header={{ showBottomBorder: false }} />)
    //   expect(getComputedStyle(screen.getByTestId('modal-header')).boxShadow).toBe('')
    // })
    // it('should not apply box-shadow when "scroll" is set to "full"', () => {
    //   render(<ModalHeader title='title' header={{ showBottomBorder: false }} />)
    //   expect(getComputedStyle(screen.getByTestId('modal-header')).boxShadow).toBe('')
    // })
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
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <ModalContext.Provider value={mockContextValue}>
            <ModalHeader title='Modal container' />
          </ModalContext.Provider>
        </LocaleContext.Provider>
      )
      expect(container.querySelector('button').getAttribute('aria-label')).toEqual(ptBr.modal.close)
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
