import * as React from 'react'

import { FormFieldProps } from '../../../form/FormField'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { Input } from '../../input/Input/Input'
import { TextInputProps } from '../../input/TextInput/TextInput'

export interface HiddenFieldProps extends FormFieldProps, TextInputProps,
    Pick<FieldProps, 'parse' | 'format'> {
    name: string
}

export class HiddenField extends React.Component<HiddenFieldProps> {

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
            <Input
                type='hidden'
                {...rest}
                {...props.input}
            />
        )
    }

}
