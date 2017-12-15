import cssGlobal from './cssGlobal'
import normalizeCss from './normalizeCss'
import * as font from './fonts/NotoSans-Regular.ttf'
import Theme from '../components/style/Theme'

export default function initializeDefault(theme: Theme) {
    const notoSans = {
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        src: 'url(' + font + ') format("truetype")'
    }

    cssGlobal(normalizeCss)
    cssGlobal({
        html: {
            fontSize: 16,
            fontFamily: [notoSans]
        }
    })
}
