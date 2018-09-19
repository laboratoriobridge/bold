import * as React from 'react'

import { TextField, TextFieldProps } from '../TextField/TextField'

export const parse = value => value.replace(/[^\d]/g, '')

export interface NumberFieldProps extends TextFieldProps {
}

export class NumberField extends React.Component<NumberFieldProps> {

    render() {
        return (
            <TextField parse={parse} {...this.props} />
        )
    }

}
