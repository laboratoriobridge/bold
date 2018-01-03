import * as React from 'react'
import * as PropTypes from 'prop-types'
import defaultTheme from '../../styles/defaultTheme'
import ThemeDefinition from './ThemeDefinition'
import createTheme from './createTheme'
import Theme from './Theme'
import initializeDefault from '../../styles/initializeDefault'

export interface ThemeProviderProps {
    themeDef?: ThemeDefinition
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    static childContextTypes = {
        theme: PropTypes.object
    }

    static defaultProps: Partial<ThemeProviderProps> = {
        themeDef: defaultTheme
    }

    private theme: Theme

    constructor(props, context) {
        super(props, context)
        this.theme = createTheme(props.themeDef)
        initializeDefault(this.theme)
    }

    getChildContext() {
        return { theme: this.theme }
    }

    render() {
        return this.props.children
    }

}
