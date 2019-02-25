import { css, Interpolation } from 'emotion'
import React from 'react'

import { Theme } from './theme/createTheme'
import { ThemeContext } from './theme/ThemeContext'

/**
 * @deprecated Use the `useStyles` hook instead.
 */
export interface WithStylesProps {
  theme?: Theme
  css?: (...styles: Interpolation[]) => string
}

export interface Styles {
  [key: string]: Interpolation
}

/**
 * @deprecated Use the `useStyles` hook instead.
 */
export function withStyles<P extends WithStylesProps, T extends React.ComponentType<P>>(WrappedComponent: T): T {
  const Cmp = WrappedComponent as React.ComponentType<P>

  class WithStyles extends React.Component<P> {
    static displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    render() {
      return <ThemeContext.Consumer>{theme => <Cmp {...this.props} css={css} theme={theme} />}</ThemeContext.Consumer>
    }
  }

  return WithStyles as T
}
