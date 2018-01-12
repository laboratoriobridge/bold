import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

import { defaultTheme, Theme, ThemeProvider } from '../styles/'

export const withTheme = (theme: Theme = defaultTheme) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <ThemeProvider theme={theme}>
                {story()}
            </ThemeProvider>
        )
    }
