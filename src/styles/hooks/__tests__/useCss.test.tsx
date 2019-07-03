import { renderHook } from '@testing-library/react-hooks'
import { css as emotionCss } from 'emotion'
import React from 'react'

import { createTheme } from '../../theme/createTheme'
import { ThemeContext } from '../../theme/ThemeContext'
import { useCss } from '../useCss'

jest.unmock('../useTheme')

it('should return a "css" function that transforms a CSS properties object to a classname', () => {
  const { result } = renderHook(() => useCss())
  expect(result.current.css).toEqual(emotionCss)
})

it('should return the current theme from ThemeContext', () => {
  const theme = createTheme()
  const { result } = renderHook(() => useCss(), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })
  expect(result.current.theme).toEqual(theme)
})
