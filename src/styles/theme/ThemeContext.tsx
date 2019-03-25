import React from 'react'

import { DefaultGlobalCss } from '../global/GlobalCss'

import { createTheme, Theme } from './createTheme'

export interface ThemeProviderProps {
  theme?: Theme
  children?: React.ReactNode
}

export const ThemeContext = React.createContext<Theme>(null)

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme, children } = props

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <DefaultGlobalCss />

        {children}
      </>
    </ThemeContext.Provider>
  )
}

ThemeProvider.defaultProps = {
  theme: createTheme(),
} as Partial<ThemeProviderProps>
