import * as React from 'react'
import { TextField, TextFieldProps } from './TextField/TextField'

export const normalize = (value) => {
    if (typeof value === 'string') {
        return value.toLowerCase()
    } else {
        return value
    }
}

export interface EmailFieldProps extends TextFieldProps {
    name: string
}

export class EmailField extends React.Component<EmailFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={normalize} />
        )
    }

}
