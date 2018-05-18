import { injectGlobal, Interpolation } from 'emotion'
import * as React from 'react'

export interface CssGlobalProps {
    styles: Interpolation
}

/**
 * Injects CSS definitions at global scope
 */
export class CssGlobal extends React.Component<CssGlobalProps> {

    componentDidMount() {
        injectGlobal(this.props.styles)
    }

    render() {
        return null
    }
}
