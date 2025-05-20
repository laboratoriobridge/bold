import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createTheme, ThemeContext } from '../../styles'
import { HeaderIconObject, ModalHeader } from './ModalHeader'

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
    it('should render the icon when "icon" prop is provided as IconImage', () => {
      render(<ModalHeader title='title' hasCloseIcon={false} icon='infoCircleOutline' />)
      expect(screen.getByTestId('modal-header').querySelector('svg')).toBeInTheDocument()
    })

    it('should render the icon when "icon" prop is provided as HeaderIconObject', () => {
      const theme = createTheme()
      const iconObj: HeaderIconObject = {
        icon: 'infoCircleOutline',
        fill: 'primary',
        stroke: 'danger',
      }

      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' hasCloseIcon={false} icon={iconObj} />
        </ThemeContext.Provider>
      )

      const svg = screen.getByTestId('modal-header').querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveStyle(`fill: ${theme.pallete.primary.main};`)
      expect(svg).toHaveStyle(`stroke: ${theme.pallete.status.danger.main};`)
    })

    it('should not render svg icon when icon prop is not provided', () => {
      render(<ModalHeader title='title' hasCloseIcon={false} />)
      expect(screen.getByTestId('modal-header').querySelector('svg')).toBeNull()
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

    it('should apply background-color when "backgroundColor" prop is provided', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' backgroundColor='red' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(`background-color: red`)
    })

    it('should apply background-color default when "backgroundColor" prop is not provided', () => {
      render(
        <ThemeContext.Provider value={theme}>
          <ModalHeader title='title' />
        </ThemeContext.Provider>
      )
      expect(screen.getByTestId('modal-header')).toHaveStyle(`background-color: ${theme.pallete.surface.main}`)
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
