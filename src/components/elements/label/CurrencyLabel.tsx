import * as React from 'react'
import { ComposedLabelProps, ComposedLabel } from './ComposedLabel'
import NumberUtil from '../../../util/NumberUtil'

export interface CurrencyLabelProps extends ComposedLabelProps {
    value: number
}

export class CurrencyLabel extends React.Component<CurrencyLabelProps> {

    format(): string {
        return NumberUtil.formatCurrency(this.props.value)
    }

    render() {
        const { value, ...rest } = this.props
        return (
            <ComposedLabel {...rest} >
                {this.props.value && this.format()}
            </ComposedLabel>
        )
    }

}
