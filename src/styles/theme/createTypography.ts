import { FontSizeProperty } from 'csstype'

export type FontSize = FontSizeProperty<string> | number

export interface Typography {
    fontFamily: string
    lineHeight: any
    sizes: {
        html: FontSize
        text: FontSize
        button: FontSize
    }
}

export const createTypography = (): Typography => {
    return {
        fontFamily: '"IBM Plex Sans", sans-serif',
        lineHeight: '1.5',
        sizes: {
            html: 16,
            text: '0.8125rem',
            button: '0.875rem',
        },
    }
}
