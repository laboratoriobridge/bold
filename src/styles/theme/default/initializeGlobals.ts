import { injectGlobal } from 'emotion'
import normalizeCss from 'normalize.css'

import { Theme } from '../Theme'

export default function initializeGlobals(theme: Theme) {
    injectGlobal(normalizeCss)
    injectGlobal({
        html: {
            fontSize: theme.font.textSize,
            fontFamily: theme.font.textFamily,
            boxSizing: 'border-box',
            color: theme.color.text,
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        hr: {
            backgroundColor: theme.color.gray10,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.font.titleFamily,
        },
    })
    injectGlobal(theme.global)
}
