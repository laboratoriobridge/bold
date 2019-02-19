import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'

import { createTheme, Theme, ThemeProvider } from '../styles/'
import { merge } from '../util'

const storybookTheme = merge({}, createTheme(), {
    global: {
        body: {
            background: '#ffffff',
        },
    },
})

export const withTheme = (theme: Theme = storybookTheme) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <ThemeProvider theme={theme}>
                {story()}
            </ThemeProvider>
        )
    }
