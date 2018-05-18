import * as notoSansFont from './fonts/NotoSans-Regular.ttf'

const notoSans = {
    fontFamily: '"Noto Sans"',
    fontStyle: 'normal',
    fontWeight: '400',
    src: `url('${notoSansFont}') format("truetype")`,
}

export type FontSize = number | string

export interface Typography {
    htmlFontSize: number
    fontSize: FontSize
    fontFaces: any[]
    fontFamily: string
}

export const createTypography = (): Typography => {
    return {
        htmlFontSize: 16,
        fontSize: '0.75rem',

        fontFaces: [notoSans],
        fontFamily: '"Noto Sans", sans-serif',
    }
}
