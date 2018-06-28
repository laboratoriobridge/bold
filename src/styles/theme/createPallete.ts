export type Color = string

export interface StatusColorMap {
    main: Color
    background: Color
    onColor: Color
}

export interface ColorScale {
    c10: Color
    c20: Color
    c30: Color
    c40: Color
    c50: Color
    c60: Color
    c70: Color
    c80: Color
    c90: Color
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

export const gray: ColorScale = {
    c90: '#e6e6e6',
    c80: '#cccccc',
    c70: '#b3b3b3',
    c60: '#999999',
    c50: '#808080',
    c40: '#666666',
    c30: '#4d4d4d',
    c20: '#333333',
    c10: '#1a1a1a',
}

export const createPallete = (): Pallete => {
    return {
        text: {
            main: gray.c30,
            secondary: gray.c40,
            disabled: gray.c70,
        },
        divider: gray.c90,
        surface: {
            main: '#ffffff',
            background: '#f2f2f7',
        },
        primary: {
            main: '#056DFF',
        },
        status: {
            danger: {
                main: '#E0001A',
                background: '#FAF0F2',
                onColor: '#FFFFFF',
            },
            success: {
                main: '#00821a',
                background: '#f0faf2',
                onColor: '#FFFFFF',
            },
            info: {
                main: '#0066f5',
                background: '#f1f7ff',
                onColor: '#FFFFFF',
            },
            alert: {
                main: '#d43900',
                background: '#fff9f4',
                onColor: '#FFFFFF',
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
