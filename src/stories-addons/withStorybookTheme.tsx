import { StoryContext } from '@storybook/addon-knobs'
import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'

import { createTheme, ThemeProvider } from '../styles/'

const storybookTheme = createTheme()

export const withStorybookTheme = (story: RenderFunction, context: StoryContext): Renderable => {
  return <ThemeProvider theme={storybookTheme}>{story()}</ThemeProvider>
}
