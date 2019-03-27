export * from './hooks'
export { createPallete, Pallete, TextColor } from './theme/createPallete'
export { createTheme, focusBoxShadow, Theme } from './theme/createTheme'
export { createTypography, Typography } from './theme/createTypography'
export { GlobalCss, DefaultGlobalCss } from './global/GlobalCss'
export { ThemeProvider, ThemeProviderProps } from './theme/ThemeContext'
export * from './utils'
export { Styles, withStyles, WithStylesProps } from './withStyles'

import * as palletes from './colors'
export const colors = palletes
