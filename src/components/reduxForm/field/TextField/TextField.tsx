import * as React from 'react'
import { TextInputProps, TextInput } from '../../../input/TextInput'
import { Field, FieldProps } from '../../Field'
import { FormFieldProps } from '../../../form/FormField'
import { WrappedFieldProps } from 'redux-form'

export interface TextFieldProps extends FormFieldProps, TextInputProps, Pick<FieldProps, 'normalize' | 'parse' | 'format'> {
    name: string
}

export class TextField extends React.Component<TextFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderInput}
            />
        )
    }

    private renderInput = (props: WrappedFieldProps) => (
        <TextInput
            {...this.props}
            {...props.input}
        />
    )

}
