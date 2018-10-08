import * as React from 'react'

import { FieldWrapperProps } from '../../../form/FieldWrapper'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { MaskedInput, MaskedInputProps } from '../../input/MaskedInput/MaskedInput'

export interface MaskedFieldProps extends FieldWrapperProps, MaskedInputProps,
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

    private renderInput = (props: RenderProps) => {
        const { format, parse, ...rest } = this.props
        return (
            <MaskedInput
                {...rest}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

}
