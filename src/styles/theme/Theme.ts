export type Color = 'background' | 'black' | 'primary' | 'red' | 'white'
    | 'gray90' | 'gray80' | 'gray70' | 'gray60' | 'gray50' | 'gray40' | 'gray30' | 'gray20' | 'gray10'

export const colors: {[key in Color]: string} = {
    'background': 'background',
    'black': 'black',
    'primary': 'primary',
    'red': 'red',
    'white': 'white',
    'gray90': 'gray90',
    'gray80': 'gray80',
    'gray70': 'gray70',
    'gray60': 'gray60',
    'gray50': 'gray50',
    'gray40': 'gray40',
    'gray30': 'gray30',
    'gray20': 'gray20',
    'gray10': 'gray10',
}

export interface Theme {
    global?: any
    baseSize: number
    baseRadius: number
    font: {
        textSize: string
        textFamily: string
        titleFamily: string
    }
    breakpoint: {
        small: string
    }
    color: {
        background: string
        black: string
        primary: string
        red: string
        text: string
        white: string

        /**
         * Theme.black clareado 90%
         */
        gray90: string
        /**
         * Theme.black clareado 80%
         */
        gray80: string
        /**
         * Theme.black clareado 70%
         */
        gray70: string
        /**
         * Theme.black clareado 60%
         */
        gray60: string
        /**
         * Theme.black clareado 50%
         */
        gray50: string
        /**
         * Theme.black clareado 40%
         */
        gray40: string
        /**
         * Theme.black clareado 30%
         */
        gray30: string
        /**
         * Theme.black clareado 20%
         */
        gray20: string
        /**
         * Theme.black clareado 10%
         */
        gray10: string
    }
}
