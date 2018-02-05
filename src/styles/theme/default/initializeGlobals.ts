import { injectGlobal } from 'emotion'
import normalizeCss from 'normalize.css'

import { Theme } from '../Theme'

export default function initializeGlobals(theme: Theme) {
    injectGlobal(normalizeCss)
    injectGlobal({
        html: {
            fontSize: theme.baseSize,
            fontFamily: theme.font.textFamily,
            boxSizing: 'border-box',
            color: theme.color.text,
        },
        body: {
            fontSize: theme.font.textSize,
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        hr: {
            backgroundColor: theme.color.gray90,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.font.titleFamily,
        },
        p: {
            margin: '0',
        },
        a: {
            cursor: 'pointer',
        },
    })
    injectGlobal(theme.global)
}
