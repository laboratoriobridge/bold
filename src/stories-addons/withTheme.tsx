import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'
import { ThemeProvider, Theme } from '../decorators/withStyles'
import defaultTheme from '../styles/defaultTheme'
import cssGlobal from '../styles/cssGlobal'
import normalizeCss from '../styles/normalizeCss'

cssGlobal(normalizeCss)

export const withTheme = (theme: Theme = defaultTheme) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    return (
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    )
}
