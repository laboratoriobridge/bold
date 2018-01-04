import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'
import defaultTheme from '../styles/theme/default/defaultTheme'
import { ThemeProvider } from '../styles/theme/ThemeProvider'
import ThemeDefinition from '../styles/theme/ThemeDefinition'

export const withTheme = (theme: ThemeDefinition = defaultTheme) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    return (
        <ThemeProvider themeDef={theme}>
            {story()}
        </ThemeProvider>
    )
}
