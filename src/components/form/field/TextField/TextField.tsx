import * as React from 'react'

import { FormFieldProps } from '../../../form/FormField'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
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

    private renderInput = (props: RenderProps) => {
        const { format, parse, ...rest } = this.props
        return (
            <TextInput
                {...rest}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

}
