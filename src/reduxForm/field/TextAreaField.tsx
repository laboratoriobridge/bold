import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { TextArea, TextAreaProps } from '../../components/input/TextArea'
import { FormFieldProps } from '../../components/form/FormField'
import field, { FieldProps } from '../hoc/field'

export interface TextAreaFieldProps extends FormFieldProps, TextAreaProps, Partial<WrappedFieldProps<any>> {
}

class TextAreaFieldCmp extends React.Component<TextAreaFieldProps> {

    render() {
        return (
            <TextArea
                {...this.props.input}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
            />
        )
    }

}

export const TextAreaField: React.ComponentClass<FieldProps & TextAreaFieldProps> = field()(TextAreaFieldCmp)
