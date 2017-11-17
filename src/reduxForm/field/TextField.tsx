import * as React from 'react'
import { TextInputProps, TextInput } from '../../components/input/TextInput'
import { Field, FieldProps } from '../hoc/Field'
import { FormFieldProps } from '../../components/form/FormField'

export interface TextFieldProps extends FormFieldProps, TextInputProps, Pick<FieldProps, 'normalize' | 'parse' | 'format'> {
    name: string
}

export class TextField extends React.Component<TextFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={props =>
                    <TextInput
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
