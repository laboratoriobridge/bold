import * as React from 'react'

import { FormFieldProps } from '../../../form/FormField'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { TextArea, TextAreaProps } from '../../input/TextArea/TextArea'

export interface TextAreaFieldProps extends FormFieldProps, TextAreaProps,
    Pick<FieldProps, 'parse' | 'format'> {
    name: string
}

export class TextAreaField extends React.Component<TextAreaFieldProps> {

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
            <TextArea
                {...rest}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

}
