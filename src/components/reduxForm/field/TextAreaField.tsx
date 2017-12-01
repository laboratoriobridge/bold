import * as React from 'react'
import { TextArea, TextAreaProps } from '../../input/TextArea'
import { FormFieldProps } from '../../form/FormField'
import { Field } from '../Field'

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
