import { Theme } from '../theme/createTheme'

import { useCss } from './useCss'

export type StyleFactory<Classes extends string> = (theme: Theme) => {
    readonly [key in Classes]: React.CSSProperties
}

export type ClassNames<Classes extends string> = {
    readonly [key in Classes]: string
}

const emptyStylesFactory: StyleFactory<any> = () => ({})

export const useClassNames = <Classes extends string>(factory: StyleFactory<Classes>): ClassNames<Classes> => {
    const { css, theme } = useCss()
    const map = factory(theme)
    return Object.keys(map)
        .reduce((all, className) => ({
            ...all,
            [className]: css(map[className]),
        }), {} as ClassNames<Classes>)
}

export const useStyles = <Classes extends string>(factory: StyleFactory<Classes> = emptyStylesFactory) => {
    const { css, theme } = useCss()
    return {
        classes: useClassNames(factory),
        css,
        theme,
    }
}
