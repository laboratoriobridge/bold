import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { FormFieldProps } from '../../../form/FormField'
import { TextInput, TextInputProps } from '../../input/TextInput/TextInput'
import { Field, FieldProps } from '../../reduxForm/Field'

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
