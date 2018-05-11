import { injectGlobal } from 'emotion'
import normalizeCss from 'normalize.css'

import { Theme } from '../Theme'

export default function initializeGlobals(theme: Theme) {
    injectGlobal(normalizeCss)
    injectGlobal({
        'html, body': {
            height: '100%',
            margin: 0,
        },
        html: {
            fontSize: theme.baseSize,
            fontFamily: theme.font.textFamily,
            boxSizing: 'border-box',
            color: theme.color.text,
            lineHeight: 1,
        },
        body: {
            fontSize: theme.font.textSize,
            overflowY: 'scroll',
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        'div, button, input, optgroup, select, textarea': {
            lineHeight: 'inherit',
        },
        hr: {
            backgroundColor: theme.color.gray90,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.font.titleFamily,
            margin: 0,
        },
        'h1': { fontSize: '1.25rem' },
        'h2': { fontSize: '1rem' },
        'h3': { fontSize: '0.875rem' },
        'h4': { fontSize: '0.75rem' },
        'h5': { fontSize: '0.625rem' },
        'h6': { fontSize: '0.5rem' },
        p: {
            margin: '0',
            lineHeight: 1.5,
        },
        a: {
            cursor: 'pointer',
        },
    })
    injectGlobal(theme.global)
}
