import React from 'react'

import { Number } from '../Number/Number'

export class PercentageProps {
    /**
     * Número de 0 a 1 representando o quociente que será transformado para porcentagem
     */
    value: number
    minDecimalPlaces?: number
    maxDecimalPlaces?: number
    placeholder?: string
    title?: string
}

export class Percentage extends React.Component<PercentageProps> {

    render() {
        const value = isFinite(this.props.value) && !isNaN(this.props.value) ? this.props.value : 0

        return (
            <Number {...this.props} sufix='%' value={value * 100} />
        )
    }

}
