import * as React from 'react'
import * as InputMask from 'inputmask-core'
import { ComposedLabelProps, ComposedLabel } from './ComposedLabel'

export interface MaskedLabelProps extends ComposedLabelProps {
    value: string
    mask: string
}

export class MaskedLabel extends React.Component<MaskedLabelProps, any> {

    formatMask(): any {
        const value = this.props.value
        const mask = this.props.mask
        const result = new InputMask({ pattern: mask, value: value })
        return result.getValue()
    }

    render() {
        const { value, mask, ...rest } = this.props
        return (
            <ComposedLabel {...rest} >
                {value && mask && this.formatMask()}
            </ComposedLabel>
        )
    }

}
