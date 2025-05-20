import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createTheme, ThemeContext } from '../../styles'
import { ModalHeader } from './ModalHeader'

describe('modal header component', () => {
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

  describe('icon', () => {
    it('should render the icon when "icon" prop is provided', () => {
      render(<ModalHeader title='title' icon='infoCircleOutline' />)
      expect(screen.getByTestId('modal-header').querySelector('svg')).toBeInTheDocument()
    })

    it('should not render icon when "icon" prop is not provided', () => {
      render(<ModalHeader title='title' hasCloseIcon={false} />)
      expect(screen.getByTestId('modal-header').querySelector('svg')).toBeNull()
    })

    it('should apply fill style to the svg when "iconFill" prop is provided', () => {
      const theme = createTheme()

      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' icon='infoCircleOutline' iconFill='primary' />
        </ThemeContext.Provider>
      )

      const svg = screen.getByTestId('modal-header').querySelector('svg')
      expect(svg).toBeInTheDocument()

      expect(svg).toHaveStyle(`fill: ${theme.pallete.primary.main};`)
    })

    it('should apply stroke style to the svg when "iconStroke" prop is provided', () => {
      const theme = createTheme()

      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' icon='infoCircleOutline' iconStroke='primary' />
        </ThemeContext.Provider>
      )

      const svg = screen.getByTestId('modal-header').querySelector('svg')
      expect(svg).toBeInTheDocument()

      expect(svg).toHaveStyle(`stroke: ${theme.pallete.primary.main};`)
    })

    it('should ignore iconFill and iconStroke when "icon" prop is not provided', () => {
      render(<ModalHeader title='title' iconFill='primary' iconStroke='secondary' hasCloseIcon={false} />)
      expect(screen.getByTestId('modal-header').querySelector('svg')).toBeNull()
    })
  })

  describe('styles', () => {
    const theme = createTheme()

    it('should apply background-color when "backgroundColor" prop is provided', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' backgroundColor='background' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(`background-color: ${theme.pallete.surface.background}`)
    })

    it('should apply box-shadow when "hasDivider" is true', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' hasDivider={true} />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(
        `box-shadow: 0 1px 5px 0 ${theme.pallete.divider},0 2px 1px -1px ${theme.pallete.divider}`
      )
    })

    it('should apply box-shadow when "hasDivider" is not provided (default true)', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(
        `box-shadow: 0 1px 5px 0 ${theme.pallete.divider},0 2px 1px -1px ${theme.pallete.divider}`
      )
    })

    it('should not apply box-shadow when "hasDivider" is false', () => {
      render(<ModalHeader title='title' hasDivider={false} />)
      expect(getComputedStyle(screen.getByTestId('modal-header')).boxShadow).toBe('')
    })
  })

  describe('close button', () => {
    it('should render close button when "hasCloseIcon" is true', () => {
      render(<ModalHeader title='title' hasCloseIcon={true} />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render close button when "hasCloseIcon" is not provided (default true)', () => {
      render(<ModalHeader title='title' />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should not render close button when "hasCloseIcon" is false', () => {
      render(<ModalHeader title='title' hasCloseIcon={false} />)
      expect(screen.queryByRole('button')).toBeNull()
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is true', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' hasCloseIcon={true} onCloseButtonClick={onCloseMock} />)
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should call onCloseButtonClick when close button is clicked and "hasCloseIcon" is not provided (default true)', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' onCloseButtonClick={onCloseMock} />)
      fireEvent.click(screen.getByRole('button'))
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    })

    it('should not call onCloseButtonClick when "hasCloseIcon" is false', () => {
      const onCloseMock = jest.fn()
      render(<ModalHeader title='title' hasCloseIcon={false} onCloseButtonClick={onCloseMock} />)
      expect(screen.queryByRole('button')).toBeNull()
      expect(onCloseMock).not.toHaveBeenCalled()
    })
  })
})
