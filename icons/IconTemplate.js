function getProps(config) {
    const props = []
    if (config.ref) { props.push('svgRef') }
    if (config.titleProp) { props.push('title') }
    if (config.expandProps) { props.push('...props') }

    if (props.length === 0) { return '()' }
    if (props.length === 1 && config.expandProps) { return 'props' }

    return `({ ${props.join(', ')} })`
}

module.exports = function(code, config, state) {
    const props = getProps(config)

    return `
/* tslint:disable */
import * as React from 'react'
import { GeneratedIconProps } from '../GeneratedIconProps'

export const ${state.componentName} = (${props}: GeneratedIconProps) => ${code}
`
}
