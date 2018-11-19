import { Renderable, RenderFunction } from '@storybook/react'
import merge = require('lodash/merge')
import * as React from 'react'

import { createTheme, Theme, ThemeProvider } from '../styles/'

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
