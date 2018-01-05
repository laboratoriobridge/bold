import { StyleSheet } from 'aphrodite'

const myGlobalExtension = {
    selectorHandler: (selector, _, generateSubtreeStyles) => {
        if (selector[0] !== '*') {
            return null
        }

        return generateSubtreeStyles(selector.slice(1))
    },
}

const { css } = (StyleSheet as any).extend([myGlobalExtension])

export default function cssGlobal(globalStyles) {
    const styles = {}

    Object.keys(globalStyles).forEach(key => {
        styles['*' + key] = globalStyles[key]
    })

    css(StyleSheet.create({
        global: styles,
    }).global)
}
