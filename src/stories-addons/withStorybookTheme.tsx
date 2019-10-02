import React from 'react'

import { lightTheme, ThemeProvider } from '../styles/'

export const withStorybookTheme = storyFn => <ThemeProvider theme={lightTheme}>{storyFn()}</ThemeProvider>
