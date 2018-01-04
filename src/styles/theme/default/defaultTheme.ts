import ThemeDefinition from '../ThemeDefinition'

let font = ''
if (process.env.NODE_ENV !== 'test') {
    font = require('./fonts/NotoSans-Regular.ttf')
}

const notoSans = {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    src: 'url(' + font + ') format("truetype")'
}

const defaultTheme: ThemeDefinition = {
    font: {
        textFamily: [notoSans, 'sans-serif'],
        titleFamily: [notoSans, 'sans-serif'],
        textSize: 16,
    },
    color: {
        primary: '#1e98ff',
        white: '#ffffff',
    },
}

export default defaultTheme
