import { Interpolation } from 'emotion'

import { Pallete } from './createPallete'
import { Typography } from './createTypography'

export type Global = Interpolation

export const createGlobals = (pallete: Pallete, typography: Typography): Global => {
    return {
        'html, body': {
            height: '100%',
            margin: 0,
        },
        html: {
            fontSize: typography.htmlFontSize,
            fontFamily: typography.fontFamily,
            boxSizing: 'border-box',
            color: pallete.text.main,
            lineHeight: 1,
        },
        body: {
            backgroundColor: pallete.surface.background,
            fontSize: typography.fontSize,
            lineHeight: typography.lineHeight,
            overflowY: 'scroll',
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        'div, button, input, optgroup, select, textarea': {
            lineHeight: 'inherit',
        },
        hr: {
            backgroundColor: pallete.divider,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: typography.fontFamily,
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
        mark: {
            background: pallete.highlight,
        },
    }
}
