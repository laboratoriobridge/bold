import cssGlobal from '../../cssGlobal'
import normalizeCss from '../../normalizeCss'
import Theme from '../Theme'
import * as font from './fonts/NotoSans-Regular.ttf'

export default function initializeDefault(theme: Theme) {
    const notoSans = {
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        src: 'url(' + font + ') format("truetype")'
    }

    cssGlobal({
        html: {
            fontSize: 16,
            fontFamily: [notoSans]
        }
    })
    cssGlobal(normalizeCss)
}
