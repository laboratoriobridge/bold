import * as React from 'react'

import { FormError, FormErrorProps } from '../FormError'
import { FormLabel, FormLabelProps } from '../FormLabel'

export interface FormFieldProps {
    label?: FormLabelProps['label']
    required?: FormLabelProps['required']
    error?: FormErrorProps['error']
    name?: string
}

export class FormField extends React.Component<FormFieldProps> {

    render() {
        const { children, name, error, label, required } = this.props
        const styles = {
            label: {
                display: 'block',
                marginBottom: '0.25rem',
            },
            error: {
                marginTop: '0.25rem',
            },
        }

        return (
            <div data-name={name}>
                {label &&
                    <FormLabel required={required} style={styles.label} htmlFor={name} label={label} />
                }
                {children}
                {error &&
                    <FormError style={styles.error} error={error} />
                }
            </div>
        )
    }

}
