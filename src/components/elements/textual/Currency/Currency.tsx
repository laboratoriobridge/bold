import * as React from 'react'

import { Number } from '../Number/Number'

export class CurrencyLabelProps {
    value?: number
}

export class Currency extends React.Component<CurrencyLabelProps> {

    render() {
        return (
            <Number prefix='R$ ' value={this.props.value} minDecimalPlaces={2} maxDecimalPlaces={2} />
        )
    }
}
