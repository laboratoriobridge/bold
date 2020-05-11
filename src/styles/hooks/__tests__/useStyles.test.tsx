import { renderHook } from '@testing-library/react-hooks'
import { css as emotionCss } from 'emotion'
import React from 'react'

import { createTheme } from '../../theme/createTheme'
import { ThemeContext } from '../../theme/ThemeContext'
import { useStyles } from '../useStyles'

jest.unmock('../useTheme')

it('should return a map of classNames generated from a map of css properties', () => {
  const factory = () => ({
    class1: {
      color: 'red',
    },
    class2: {
      color: 'blue',
    },
  })

  const styles = factory()

  const { result } = renderHook(() => useStyles(factory))
  expect(result.current.classes).toEqual({
    class1: emotionCss(styles.class1),
    class2: emotionCss(styles.class2),
  })
})

it('should call the factory with additional arguments passed to the function', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()

  renderHook(() => useStyles(factory, 'foo', 42, { obj: true }), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })
  expect(factory).toHaveBeenLastCalledWith(theme, 'foo', 42, { obj: true })
})

it('should call the factory with current theme from ThemeContext', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()

  renderHook(() => useStyles(factory), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })
  expect(factory).toHaveBeenLastCalledWith(theme)
})

it('should return the current theme from ThemeContext', () => {
  const theme = createTheme()
  const { result } = renderHook(() => useStyles(), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })
  expect(result.current.theme).toEqual(theme)
})

it('should return the "css" function', () => {
  const { result } = renderHook(() => useStyles())
  expect(result.current.css).toEqual(emotionCss)
})

it('should memoize the return on rerender', () => {
  const factory = jest.fn(() => ({}))
  const theme = createTheme()
  const { result, rerender } = renderHook(() => useStyles(factory, 'foo', 42), {
    wrapper: ({ children }) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  })

  const first = result.current.classes
  rerender()
  const second = result.current.classes

  expect(second).toBe(first)
  expect(factory).toHaveBeenCalledTimes(1)
  expect(factory).toHaveBeenLastCalledWith(theme, 'foo', 42)
})
