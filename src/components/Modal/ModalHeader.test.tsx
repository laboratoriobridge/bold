import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createTheme, ThemeContext } from '../../styles'
import { ModalHeader } from './ModalHeader'
import { ModalHeaderIcon } from './ModalHeaderIcon'

jest.mock('./ModalHeaderIcon', () => ({
  ModalHeaderIcon: jest.fn((props) => <div {...props} />),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('ModalHeader', () => {
  describe('basic rendering', () => {
    it('should render correctly', () => {
      const { container } = render(<ModalHeader title='title' />)
      expect(container).toMatchSnapshot()
    })

    it('should render the title when "title" prop is provided', () => {
      render(<ModalHeader title='title' />)
      expect(screen.getByText('title')).toBeInTheDocument()
    })

    it('should render the subtitle when "subtitle" prop is provided', () => {
      render(<ModalHeader title='title' subtitle='subtitle' />)
      expect(screen.getByText('subtitle')).toBeInTheDocument()
    })

    it('should render only the title when only "title" prop is provided', () => {
      render(<ModalHeader title='title' />)
      const texts = screen.getAllByText('title')
      expect(texts).toHaveLength(1)
      expect(screen.getByTestId('modal-header').textContent).toBe('title')
    })
  })

  describe('title area alignment', () => {
    it('should set align-items to flex-start when subtitle is provided', () => {
      render(<ModalHeader title='title' subtitle='subtitle' />)
      const container = screen.getByTestId('modal-header-title-area')
      expect(container).toHaveStyle('align-items: flex-start')
    })

    it('should set align-items to center when subtitle is not provided', () => {
      render(<ModalHeader title='title' />)
      const container = screen.getByTestId('modal-header-title-area')
      expect(container).toHaveStyle('align-items: center')
    })
  })

  describe('styles', () => {
    const theme = createTheme()

    it('should apply background-color when "background" prop is set in "header"', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' header={{ background: 'red' }} />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(`background-color: red`)
    })

    it('should apply background-color default when "background" prop is not set in "header"', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(`background-color: ${theme.pallete.surface.main}`)
    })

    it('should apply box-shadow when "showBottomBorder" is set to true in "header"', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' header={{ showBottomBorder: true }} />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(
        `box-shadow: 0 1px 5px 0 ${theme.pallete.divider},0 2px 1px -1px ${theme.pallete.divider}`
      )
    })

    it('should apply box-shadow when "showBottomBorder" is not set in "header" (default true)', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(
        `box-shadow: 0 1px 5px 0 ${theme.pallete.divider},0 2px 1px -1px ${theme.pallete.divider}`
      )
    })

    it('should not apply box-shadow when "showBottomBorder" is set to false in "header"', () => {
      render(<ModalHeader title='title' header={{ showBottomBorder: false }} />)
      expect(getComputedStyle(screen.getByTestId('modal-header')).boxShadow).toBe('')
    })
  })

  describe('close button', () => {
    it('should render close button when "showCloseIcon" is true', () => {
      render(<ModalHeader title='title' showCloseIcon />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render close button when "showCloseIcon" is not provided (default true)', () => {
      render(<ModalHeader title='title' />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should not render close button when "showCloseIcon" is false', () => {
      render(<ModalHeader title='title' showCloseIcon={false} />)
      expect(screen.queryByRole('button')).toBeNull()
    })

    it('should call onCloseButtonClick when close button is clicked and "showCloseIcon" is true', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' onCloseButtonClick={onCloseMock} showCloseIcon />)
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should call onCloseButtonClick when close button is clicked and "showCloseIcon" is not provided (default true)', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' onCloseButtonClick={onCloseMock} />)
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should not call onCloseButtonClick when "showCloseIcon" is false', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' showCloseIcon={false} onCloseButtonClick={onCloseMock} />)
      expect(screen.queryByRole('button')).toBeNull()
      expect(onCloseMock).not.toHaveBeenCalled()
    })
  })

  describe('Header icon', () => {
    it('does not render ModalHeaderIcon when icon is not provided', () => {
      render(<ModalHeader title='title' showCloseIcon={false} />)

      const svgTags = document.querySelectorAll('svg')
      expect(svgTags.length).toBe(0)
    })

    it('passes all expected props correctly to ModalHeaderIcon', () => {
      render(<ModalHeader title='title' header={{ icon: 'infoCircleOutline' }} />)

      expect(ModalHeaderIcon).toHaveBeenCalledWith(
        expect.objectContaining({
          icon: 'infoCircleOutline',
        }),
        {}
      )
    })
  })
})
