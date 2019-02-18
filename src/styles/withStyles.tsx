import { css, Interpolation } from 'emotion'
import React from 'react'

import { Theme } from './theme/createTheme'
import { ThemeContext } from './theme/ThemeContext'

export interface WithStylesProps {
    theme?: Theme
    css?: (...styles: Interpolation[]) => string
}

export interface Styles {
    [key: string]: Interpolation
}

export function withStyles<P extends WithStylesProps, T extends React.ComponentType<P>>(
    WrappedComponent: T
): T {
    const Cmp = WrappedComponent as React.ComponentType<P>

    class WithStyles extends React.Component<P> {
        static displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

        render() {
            return (
                <ThemeContext.Consumer>
                    {(theme) => (
                        <Cmp
                            css={css}
                            theme={theme}
                            {...this.props}
                        />
                    )}
                </ThemeContext.Consumer>
            )
        }
    }

    return WithStyles as any as T
}
