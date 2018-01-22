import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { FormFieldProps } from '../../../form/FormField'
import { Field, FieldProps } from '../../finalForm/Field'
import { TextInput, TextInputProps } from '../../input/TextInput/TextInput'

export interface TextFieldProps extends FormFieldProps, TextInputProps,
    Pick<FieldProps, 'parse' | 'format'> {
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

    private renderInput = (props: FieldRenderProps) => (
        <TextInput
            {...this.props}
            {...props.input}
            status={props.meta.touched && props.meta.error && 'error'}
        />
    )

}
