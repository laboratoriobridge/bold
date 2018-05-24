import { keyframes } from 'emotion'

import { Breakpoints, createBreakpoints } from './createBreakpoints'
import { createGlobals, Global } from './createGlobals'
import { Color, createPallete, Pallete, TextColor, textColorMap } from './createPallete'
import { createTypography, Typography } from './createTypography'
import { zIndex, ZIndex } from './zIndex'

export interface Theme {
    pallete: Pallete
    typography: Typography
    breakpoints: Breakpoints
    global: Global
    zIndex: ZIndex
    radius: { main: number, button: number }
    animation: any
}

export const createTheme = (): Theme => {
    const pallete = createPallete()
    const typography = createTypography()

    return {
        pallete,
        typography,
        breakpoints: createBreakpoints(),
        global: createGlobals(pallete, typography),
        zIndex,
        radius: {
            main: 2,
            button: 4,
        },
        animation: {
            spinAround: keyframes({
                from: {
                    transform: 'rotate(0deg)',
                },
                to: {
                    transform: 'rotate(359deg)',
                },
            }),
            fadeInFromTop: keyframes({
                from: {
                    opacity: '0',
                    transform: 'translateY(-10%)',
                },
                to: {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            }),
        },
    }
}

export const getTextColor = (theme: Theme, color: TextColor): Color => {
    return textColorMap[color](theme.pallete)
}

type FocusBoxShadow = 'single' | 'double'

export const focusBoxShadow = (theme: Theme, color: TextColor = 'primary', type: FocusBoxShadow = 'double') => {
    const c = getTextColor(theme, color)

    if (type === 'single') {
        return `0 0 0 2px ${c}`
    } else {
        return `0 0 0 2px ${theme.pallete.surface.background}, 0 0 0 4px ${c}`
    }
}
