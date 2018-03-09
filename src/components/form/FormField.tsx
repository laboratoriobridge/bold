import * as React from 'react'

import { Spacing } from '../layout/Spacing/Spacing'

import { FormError } from './FormError'
import { FormLabel, FormLabelProps } from './FormLabel'

export interface FormFieldProps extends FormLabelProps {
    error?: string
    name?: string
    title?: string
}

export class FormField extends React.Component<FormFieldProps, any> {

    render() {
        const { children, name, title, error, ...rest } = this.props

        const label = this.props.label && (
            <Spacing bottom={0.5}>
                <FormLabel {...rest} />
            </Spacing>
        )

        const errorCmp = this.props.error && (
            <Spacing top={0.5}>
                <FormError error={error} />
            </Spacing>
        )

        return (
            <div title={title} data-name={name}>
                {label}
                <div>
                    {children}
                </div>
                {errorCmp}
            </div>
        )
    }

}
