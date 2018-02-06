import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { FormFieldProps } from '../../../form/FormField'
import { Field, FieldProps } from '../../finalForm/Field'
import { MaskedInput, MaskedInputProps } from '../../input/MaskedInput/MaskedInput'

export interface MaskedFieldProps extends FormFieldProps, MaskedInputProps,
    Pick<FieldProps, 'parse' | 'format'> {
    name: string
}

export class MaskedField extends React.Component<MaskedFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderInput}
            />
        )
    }

    private renderInput = (props: FieldRenderProps) => {
        const { format, parse, ...rest } = this.props
        return (
            <MaskedInput
                {...rest}
                {...props.input}
                status={props.meta.touched && props.meta.error && 'error'}
            />
        )
    }

}
