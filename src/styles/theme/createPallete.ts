import { Color } from 'csstype'

import { blue, ColorScale, gray, green, orange, red } from '../colors'

export interface StatusColorMap {
    main: Color
    background: Color
    onColor: Color
}

export interface Pallete {
    text: { main: Color, secondary: Color, disabled: Color }
    link: { main: Color }
    surface: { main: Color, background: Color }
    divider: Color
    primary: { main: Color }
    status: {
        danger: StatusColorMap
        success: StatusColorMap
        info: StatusColorMap
        alert: StatusColorMap
    }
    highlight: Color
    gray: ColorScale
}

export const createPallete = (): Pallete => {
    return {
        text: {
            main: gray.c30,
            secondary: gray.c40,
            disabled: gray.c70,
        },
        link: {
            main: '#0066f5',
        },
        divider: gray.c90,
        surface: {
            main: gray.c100,
            background: gray.c90,
        },
        primary: {
            main: '#056DFF',
        },
        status: {
            danger: {
                main: red.c40,
                background: red.c90,
                onColor: red.c100,
            },
            success: {
                main: green.c40,
                background: green.c90,
                onColor: green.c100,
            },
            info: {
                main: blue.c40,
                background: blue.c90,
                onColor: blue.c100,
            },
            alert: {
                main: orange.c40,
                background: orange.c90,
                onColor: orange.c100,
            },
        },
        highlight: '#FFED94',
        gray,
    }
}

export type TextColor = 'normal' | 'primary' | 'danger' | 'success' | 'info' | 'alert'
    | 'gray90' | 'gray80' | 'gray70' | 'gray60' | 'gray50' | 'gray40' | 'gray30' | 'gray20' | 'gray10'

export const textColorMap: { [key in TextColor]: (pallete: Pallete) => Color } = {
    'normal': (pallete) => pallete.text.main,
    'primary': (pallete) => pallete.primary.main,
    'danger': (pallete) => pallete.status.danger.main,
    'success': (pallete) => pallete.status.success.main,
    'info': (pallete) => pallete.status.info.main,
    'alert': (pallete) => pallete.status.alert.main,
    'gray90': (pallete) => pallete.gray.c90,
    'gray80': (pallete) => pallete.gray.c80,
    'gray70': (pallete) => pallete.gray.c70,
    'gray60': (pallete) => pallete.gray.c60,
    'gray50': (pallete) => pallete.gray.c50,
    'gray40': (pallete) => pallete.gray.c40,
    'gray30': (pallete) => pallete.gray.c30,
    'gray20': (pallete) => pallete.gray.c20,
    'gray10': (pallete) => pallete.gray.c10,
}
