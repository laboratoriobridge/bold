export type FontSize = number | string

export interface Typography {
    htmlFontSize: number
    lineHeight: any
    fontSize: FontSize
    fontFamily: string
}

export const createTypography = (): Typography => {
    return {
        htmlFontSize: 16,
        lineHeight: '1.5',
        fontSize: '0.75rem',
        fontFamily: '"Noto Sans", sans-serif',
    }
}
