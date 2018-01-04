import { StyleSheet, StyleDeclaration } from 'aphrodite'
import Theme from '../../styles/theme/Theme'

const childSelectorExtension = {
    selectorHandler: (selector, baseSelector, generateSubtreeStyles) => {
        if (selector[0] !== '&') {
            return null
        }

        return generateSubtreeStyles(`${baseSelector}${selector.slice(1)}`)
    }
}

export const { css } = (StyleSheet as any).extend([childSelectorExtension])

export type StyleCreator = <T extends StyleDeclaration>(styleCreator: (theme: Theme) => T) => T

export default function createStyles(context): StyleCreator {
    const theme = context.theme

    if (!theme) {
        throw new Error('Theme não encontrado, existe um ThemeProvider?')
    }

    return <T extends StyleDeclaration>(styleCreator: (theme: Theme) => T): T => {
        return StyleSheet.create(styleCreator(theme))
    }
}
