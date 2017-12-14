import cssGlobal from './cssGlobal'
import normalizeCss from './normalizeCss'
import * as font from './fonts/NotoSans-Regular.ttf'

const notoSans = {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    src: 'url(' + font + ') format("truetype")'
}

cssGlobal(normalizeCss)
cssGlobal({
    html: {
        fontFamily: [notoSans]
    }
})
