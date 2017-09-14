import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { TextInputProps, TextInput } from '../../components/input/TextInput'
import field, { FieldProps } from '../hoc/field'
import { FormFieldProps } from '../../components/form/FormField'

export interface TextFieldProps extends FormFieldProps, TextInputProps, Partial<WrappedFieldProps<any>> {
}

class TextFieldCmp extends React.Component<TextFieldProps> {

    render() {
        return (
            <TextInput
                {...this.props.input}
                placeholder={this.props.placeholder}
                maxLength={this.props.maxLength}
                disabled={this.props.disabled}
            />
        )
    }

}

export const TextField: React.ComponentClass<FieldProps & TextFieldProps> = field()(TextFieldCmp)
