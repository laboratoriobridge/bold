import { ThemeDefinition } from '../ThemeDefinition'

import * as font from './fonts/NotoSans-Regular.ttf'

const notoSans = {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    src: 'url(' + font + ') format("truetype")',
}

export const defaultTheme: ThemeDefinition = {
    font: {
        textFamily: [notoSans, 'sans-serif'],
        titleFamily: [notoSans, 'sans-serif'],
        textSize: 16,
    },
    breakpoint: {
        small: 1280,
    },
    color: {
        text: '#4d4d4d',
        primary: '#1e98ff',
        red: '#f6001c',
        white: '#ffffff',
    },
}
