import React from 'react'

import { createTheme, lightTheme, ThemeProvider } from '../styles/'

// If running on loki, use a local font-family to avoid delays downloading it
const storybookTheme = !process.env.STORYBOOK_LOKI
  ? lightTheme
  : createTheme({
      typography: {
        fontFamily: 'sans-serif',
      },
    })

export const withStorybookTheme = storyFn => <ThemeProvider theme={storybookTheme}>{storyFn()}</ThemeProvider>
