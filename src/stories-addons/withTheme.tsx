import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'
import defaultTheme from '../styles/defaultTheme'
import ThemeProvider from '../components/style/ThemeProvider'
import ThemeDefinition from '../components/style/ThemeDefinition'

export const withTheme = (theme: ThemeDefinition = defaultTheme) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    return (
        <ThemeProvider themeDef={theme}>
            {story()}
        </ThemeProvider>
    )
}
