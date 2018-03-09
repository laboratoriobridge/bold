import { keyframes } from 'emotion'

import { Color, Theme } from '../../theme/Theme'
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
    baseSize: 16,
    baseRadius: 2,
    font: {
        textSize: '0.75rem',
        textFamily: '"Noto Sans", sans-serif',
        titleFamily: '"Noto Sans", sans-serif',
    },
    breakpoint: {
        small: '@media (max-width: 1280px)',
    },
    color: {
        background: '#f2f2f7',
        black: '#000000',
        primary: '#056DFF',
        red: '#E0001A',
        text: '#4d4d4d',
        white: '#ffffff',
        gray90: shade(0.9, '#000000'),
        gray80: shade(0.8, '#000000'),
        gray70: shade(0.7, '#000000'),
        gray60: shade(0.6, '#000000'),
        gray50: shade(0.5, '#000000'),
        gray40: shade(0.4, '#000000'),
        gray30: shade(0.3, '#000000'),
        gray20: shade(0.2, '#000000'),
        gray10: shade(0.1, '#000000'),
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
    },
}

type FocusBoxShadow = 'single' | 'double'

export const focusBoxShadow = (theme: Theme, color: Color = 'primary', type: FocusBoxShadow = 'double') => {
    if (type === 'single') {
        return '0 0 0 2px ' + theme.color[color]
    } else {
        return '0 0 0 2px ' + theme.color.background + ', 0 0 0 4px ' + theme.color[color]
    }
}
