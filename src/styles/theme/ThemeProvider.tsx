import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import * as React from 'react'

import { defaultTheme } from './default/defaultTheme'
import initializeGlobals from './default/initializeGlobals'
import { Theme } from './Theme'

export interface ThemeProviderProps {
    theme?: Theme
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    static defaultProps: Partial<ThemeProviderProps> = {
        theme: defaultTheme,
    }

    componentWillMount() {
        initializeGlobals(this.props.theme)
    }

    render() {
        return (
            <EmotionThemeProvider theme={this.props.theme}>
                {this.props.children}
            </EmotionThemeProvider>
        )
    }

}
