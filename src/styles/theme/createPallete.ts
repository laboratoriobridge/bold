import { Color } from 'csstype'

import { blue, ColorScale, gray, green, orange, red } from '../colors'

export interface StatusColorMap {
    main: Color
    background: Color
    onColor: Color
}

export interface Pallete {
    text: { main: Color, secondary: Color, disabled: Color }
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
            main: gray.c20,
            secondary: gray.c40,
            disabled: gray.c70,
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

export type TextColor = 'normal' | 'secondary' | 'disabled' | 'primary' | 'danger' | 'success' | 'info' | 'alert'

export const textColorMap: { [key in TextColor]: (pallete: Pallete) => Color } = {
    'normal': (pallete) => pallete.text.main,
    'primary': (pallete) => pallete.primary.main,
    'danger': (pallete) => pallete.status.danger.main,
    'success': (pallete) => pallete.status.success.main,
    'info': (pallete) => pallete.status.info.main,
    'alert': (pallete) => pallete.status.alert.main,
    'secondary': (pallete) => pallete.text.secondary,
    'disabled': (pallete) => pallete.text.disabled,
}
