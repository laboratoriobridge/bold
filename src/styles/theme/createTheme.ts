import { shade } from '../utils'

import { Theme } from './Theme'
import { ThemeDefinition } from './ThemeDefinition'

export default function createTheme(themeDef: ThemeDefinition): Theme {
    return {
        font: {
            ...themeDef.font,
        },
        breakpoint: {
            small: `@media (max-width: ${themeDef.breakpoint.small}px)`,
        },
        color: {
            primary: themeDef.color.primary,
            white: themeDef.color.white,
            gray10: shade(-0.1, themeDef.color.white),
            gray20: shade(-0.2, themeDef.color.white),
            gray30: shade(-0.3, themeDef.color.white),
            gray40: shade(-0.4, themeDef.color.white),
            gray50: shade(-0.5, themeDef.color.white),
            gray60: shade(-0.6, themeDef.color.white),
            gray70: shade(-0.7, themeDef.color.white),
            gray80: shade(-0.8, themeDef.color.white),
            gray90: shade(-0.9, themeDef.color.white),
        },
    }
}
