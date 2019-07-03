import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { createTheme } from '../../theme/createTheme'
import { ThemeContext } from '../../theme/ThemeContext'
import { useTheme } from '../useTheme'

jest.unmock('../useTheme')

it('should return the current theme from ThemeContext', () => {
  const theme = createTheme()
  const { result } = renderHook(() => useTheme(), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })
  expect(result.current).toEqual(theme)
})
