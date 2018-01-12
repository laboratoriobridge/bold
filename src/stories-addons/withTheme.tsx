import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

import { Theme } from '../../lib/styles/theme/Theme'
import { defaultTheme, ThemeProvider } from '../styles/'

export const withTheme = (theme: Theme = defaultTheme) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <ThemeProvider theme={theme}>
                {story()}
            </ThemeProvider>
        )
    }
