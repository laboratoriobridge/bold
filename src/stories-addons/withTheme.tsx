import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

import { defaultTheme, ThemeDefinition, ThemeProvider } from '../styles/'

export const withTheme = (theme: ThemeDefinition = defaultTheme) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <ThemeProvider themeDef={theme}>
                {story()}
            </ThemeProvider>
        )
    }
