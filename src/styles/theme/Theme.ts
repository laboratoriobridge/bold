export type Color = 'primary' | 'red' | 'white'
    | 'gray10' | 'gray20' | 'gray30' | 'gray40' | 'gray50' | 'gray60' | 'gray70' | 'gray80' | 'gray90'

export const colors: {[key in Color]: string} = {
    'primary': 'primary',
    'red': 'red',
    'white': 'white',
    'gray10': 'gray10',
    'gray20': 'gray20',
    'gray30': 'gray30',
    'gray40': 'gray40',
    'gray50': 'gray50',
    'gray60': 'gray60',
    'gray70': 'gray70',
    'gray80': 'gray80',
    'gray90': 'gray90',
}

export interface Theme {
    font: {
        textFamily: any[]
        titleFamily: any[]
        textSize: number
    }
    breakpoint: {
        small: string
    }
    color: {
        primary: string
        red: string
        white: string
        text: string

        /**
         * Theme.white escurecido 10%
         */
        gray10: string
        /**
         * Theme.white escurecido 20%
         */
        gray20: string
        /**
         * Theme.white escurecido 30%
         */
        gray30: string
        /**
         * Theme.white escurecido 40%
         */
        gray40: string
        /**
         * Theme.white escurecido 50%
         */
        gray50: string
        /**
         * Theme.white escurecido 60%
         */
        gray60: string
        /**
         * Theme.white escurecido 70%
         */
        gray70: string
        /**
         * Theme.white escurecido 80%
         */
        gray80: string
        /**
         * Theme.white escurecido 90%
         */
        gray90: string
    }
}
