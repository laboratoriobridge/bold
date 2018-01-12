import { css } from 'emotion'
import { withTheme } from 'emotion-theming'
import * as React from 'react'

import { Theme } from '../../lib/styles/theme/Theme'

export interface WithStylesProps {
    styles?: React.CSSProperties

    theme?: Theme
    css?: (...styles: any[]) => string
}

export function withStyles<P extends WithStylesProps,
    T extends React.ComponentClass<P>>(WrappedComponent: T): T {
    class WithStyles extends React.Component<P> {

        render() {
            return (
                <WrappedComponent
                    {...this.props}
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
