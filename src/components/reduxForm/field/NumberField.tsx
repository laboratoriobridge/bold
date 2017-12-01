import * as React from 'react'
import { TextField } from './TextField/TextField'

export const normalize = value => value.replace(/[^\d]/g, '')

export interface NumberFieldProps {
    name: string
}

export class NumberField extends React.Component<NumberFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={normalize} />
        )
    }

}
