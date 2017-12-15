import * as React from 'react'
import { FormLabelProps, FormLabel } from './FormLabel'

export interface FormFieldProps extends FormLabelProps {
    name?: string
    title?: string
}

export class FormField extends React.Component<FormFieldProps, any> {

    render() {
        const { children, name, title, ...rest } = this.props

        return (
            <div title={title} data-name={name}>
                {this.props.label && <FormLabel {...rest} />}
                <div>
                    {children}
                </div>
            </div>
        )
    }

}
