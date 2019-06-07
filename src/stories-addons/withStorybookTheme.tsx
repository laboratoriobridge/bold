import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'

import { lightTheme, ThemeProvider } from '../styles/'

export const withStorybookTheme = (story: RenderFunction): Renderable => {
  return <ThemeProvider theme={lightTheme}>{story()}</ThemeProvider>
}
