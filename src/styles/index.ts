export * from './hooks'
export { createPallete, Pallete, TextColor } from './theme/createPallete'
export { createTheme, focusBoxShadow, Theme } from './theme/createTheme'
export { createTypography, Typography } from './theme/createTypography'
export { CssGlobal, CssGlobalProps } from './theme/CssGlobal'
export { ThemeProvider, ThemeProviderProps } from './theme/ThemeContext'
export * from './utils'
export { Styles, withStyles, WithStylesProps } from './withStyles'

import * as palletes from './colors'
export const colors = palletes
