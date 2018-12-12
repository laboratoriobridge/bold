import * as React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { TextInput, TextInputProps } from '../../input/TextInput/TextInput'

export interface TextFieldProps extends BaseFieldProps<TextInputProps> {
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
        return (
            <TextInput
                {...extractInputProps(this.props)}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

}
