import * as React from 'react'

import { TextField, TextFieldProps } from '../TextField/TextField'

export const parse = value => value.replace(/[^\d]/g, '')

export interface NumberFieldProps extends Pick<TextFieldProps, 'name' | 'label' | 'placeholder' | 'required'> {
}

export class NumberField extends React.Component<NumberFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={parse} />
        )
    }

}
