import React from 'react'

import { createTheme, Theme } from './createTheme'
import { CssGlobal } from './CssGlobal'

export interface ThemeProviderProps {
    theme?: Theme
}

export const ThemeContext = React.createContext<Theme>(null)

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    static defaultProps: Partial<ThemeProviderProps> = {
        theme: createTheme(),
    }

    render() {
        return (
            <ThemeContext.Provider value={this.props.theme}>
                <>
                    <CssGlobal styles={this.props.theme.global} />

                    {this.props.children}
                </>
            </ThemeContext.Provider>
        )
    }
}
