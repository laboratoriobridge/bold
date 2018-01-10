import * as React from 'react'

import { Spacing } from '../layout/Spacing/Spacing'

import { FormLabel, FormLabelProps } from './FormLabel'

export interface FormFieldProps extends FormLabelProps {
    error?: any
    name?: string
    title?: string
}

export class FormField extends React.Component<FormFieldProps, any> {

    render() {
        const { children, name, title, ...rest } = this.props

        const label = this.props.label && (
            <Spacing bottom={0.25}>
                <FormLabel {...rest} />
            </Spacing>
        )

        return (
            <div title={title} data-name={name}>
                {label}
                <div>
                    {children}
                </div>
            </div>
        )
    }

}
