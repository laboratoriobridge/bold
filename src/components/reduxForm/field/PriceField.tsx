import * as React from 'react'
import { TextField } from './TextField/TextField'

export const format = value => {
    if (value) {
        let onlyNums = value.replace(/\b0+/g, '') && value.replace(/[^\d]/g, '')
        if (onlyNums.length < 3) {
            return onlyNums
        }
        onlyNums = onlyNums.substring(0, 8)
        const tam = onlyNums.length
        return onlyNums.slice(0, tam - 2) + ',' + onlyNums.slice(tam - 2, tam)
    }

    return ''
}

export const parse = value => value.replace(',', '.')

export interface PriceFieldProps {
    name: string
}

export class PriceField extends React.Component<PriceFieldProps> {

    render() {
        return (
            <TextField {...this.props} parse={parse} format={format} />
        )
    }

}
