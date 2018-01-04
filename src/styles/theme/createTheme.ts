import ThemeDefinition from './ThemeDefinition'
import Theme from './Theme'
import { shade } from './utils'

export default function createTheme(themeDef: ThemeDefinition): Theme {
    return {
        primary: themeDef.primary,
        white: themeDef.white,
        gray10: shade(-0.1, themeDef.white),
        gray20: shade(-0.2, themeDef.white),
        gray30: shade(-0.3, themeDef.white),
        gray40: shade(-0.4, themeDef.white),
        gray50: shade(-0.5, themeDef.white),
        gray60: shade(-0.6, themeDef.white),
        gray70: shade(-0.7, themeDef.white),
        gray80: shade(-0.8, themeDef.white),
        gray90: shade(-0.9, themeDef.white),
    }
}
