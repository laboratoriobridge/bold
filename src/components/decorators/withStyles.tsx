import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StyleSheet, css as AphroditeCss, StyleDeclaration } from 'aphrodite'
import memoize = require('lodash/memoize')

export const css = AphroditeCss

export type StyleCreator = <T extends StyleDeclaration>(styleCreation: (theme: Theme) => T) => T

export interface WithStylesProps {
    createStyles?: StyleCreator
}

export function createStyles(context): StyleCreator {
    const theme = context.theme

    if (!theme) {
        throw new Error('Theme não encontrado, existe um ThemeProvider?')
    }

    return memoize(<T extends StyleDeclaration>(styleCreation: (theme: Theme) => T): T => {
        if (theme) {
            return StyleSheet.create(styleCreation(theme))
        }
        return null
    }, () => theme) as StyleCreator
}

export function withStyles<P extends WithStylesProps, T extends React.ComponentClass<P>>(WrappedComponent: T): T {
    class WithStyles extends React.Component<P> {

        static contextTypes = {
            theme: PropTypes.object
        }

        constructor(props, context) {
            super(props, context)

            this['styleCreator'] = createStyles(context)
        }

        render() {
            return <WrappedComponent {...this.props} createStyles={this['styleCreator']} />
        }

    }

    (WithStyles as any).displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    return WithStyles as any as T
}

export interface Theme {
    primary: string
}

export interface ThemeProviderProps {
    theme: Theme
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    static childContextTypes = {
        theme: PropTypes.object
    }

    getChildContext() {
        return { theme: this.props.theme }
    }

    render() {
        return this.props.children
    }

}
