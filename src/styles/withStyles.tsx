import { css, Interpolation } from 'emotion'
import { withTheme } from 'emotion-theming'
import * as React from 'react'

import { Theme } from './theme/createTheme'

export interface WithStylesProps {
    styles?: any

    theme?: Theme
    css?: (...styles: Interpolation[]) => string
}

export interface Styles {
    [key: string]: Interpolation
}

export function withStyles<P extends WithStylesProps,
    T extends React.ComponentClass<P>>(WrappedComponent: T): T {
    class WithStyles extends React.Component<P> {

        render() {
            const { styles, ...rest } = this.props as any

            return (
                <WrappedComponent
                    {...rest}
                    css={this.css}
                />
            )
        }

        private css = (...styles) => {
            return css(styles, this.props.styles)
        }

    }

    const withThemeComponent = withTheme<P, Theme>(WithStyles)
    withThemeComponent.displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    return withThemeComponent as any as T
}
