import * as React from 'react'
import { TextArea, TextAreaProps } from '../../components/input/TextArea'
import { FormFieldProps } from '../../components/form/FormField'
import { Field } from '../hoc/Field'

export interface TextAreaFieldProps extends FormFieldProps, TextAreaProps {
    name: string
}

export class TextAreaField extends React.Component<TextAreaFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={props =>
                    <TextArea
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
