module.exports = (opts = {}) => {
    let props = ''

    if (opts.expandProps && opts.ref) {
        props = '{svgRef, ...props}'
    } else if (opts.expandProps) {
        props = 'props'
    } else if (opts.ref) {
        props = '{svgRef}'
    }

    return (code, state) => `
/* tslint:disable */
import * as React from 'react'
import { GeneratedIconProps } from '../GeneratedIconProps'

export const ${state.componentName} = (${props}: GeneratedIconProps) => ${code}
`
}
