import { Theme } from '../../theme/Theme'
import { shade } from '../../utils'

import * as font from './fonts/NotoSans-Regular.ttf'

const notoSans = {
    fontFamily: '"Noto Sans"',
    fontStyle: 'normal',
    fontWeight: '400',
    src: 'url(' + font + ') format("truetype")',
}

export const defaultTheme: Theme = {
    global: {
        '@font-face': notoSans,
    },
    font: {
        textFamily: '"Noto Sans", sans-serif',
        titleFamily: '"Noto Sans", sans-serif',
        textSize: 16,
    },
    breakpoint: {
        small: '@media (max-width: 1280px)',
    },
    color: {
        text: '#4d4d4d',
        primary: '#1e98ff',
        red: '#f6001c',
        white: '#ffffff',
        gray10: shade(-0.1, '#ffffff'),
        gray20: shade(-0.2, '#ffffff'),
        gray30: shade(-0.3, '#ffffff'),
        gray40: shade(-0.4, '#ffffff'),
        gray50: shade(-0.5, '#ffffff'),
        gray60: shade(-0.6, '#ffffff'),
        gray70: shade(-0.7, '#ffffff'),
        gray80: shade(-0.8, '#ffffff'),
        gray90: shade(-0.9, '#ffffff'),
    },
}
