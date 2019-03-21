import { StoryContext } from '@storybook/addon-knobs'
import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'

import { createTheme, ThemeProvider } from '../styles/'
import { merge } from '../util'

const storybookTheme = merge({}, createTheme(), {
  global: {
    body: {
      background: '#ffffff',
    },
  },
})

export const withStorybookTheme = (story: RenderFunction, context: StoryContext): Renderable => {
  return <ThemeProvider theme={storybookTheme}>{story()}</ThemeProvider>
}
