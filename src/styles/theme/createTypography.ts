export type FontSize = number | string

export interface Typography {
    htmlFontSize: number
    fontSize: FontSize
    fontFamily: string
}

export const createTypography = (): Typography => {
    return {
        htmlFontSize: 16,
        fontSize: '0.75rem',
        fontFamily: '"Noto Sans", sans-serif',
    }
}
