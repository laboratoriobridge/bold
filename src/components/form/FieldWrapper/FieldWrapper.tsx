import * as React from 'react'

import { FormError, FormErrorProps } from '../FormError'
import { FormLabel, FormLabelProps } from '../FormLabel'

export interface FieldWrapperProps {
    id?: string
    name?: string
    label?: FormLabelProps['label']
    required?: FormLabelProps['required']
    error?: FormErrorProps['error']
}

export class FieldWrapper extends React.PureComponent<FieldWrapperProps> {

    render() {
        const { children, id, name, error, label, required } = this.props
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
                    <FormLabel required={required} style={styles.label} htmlFor={id} label={label} />
                }
                {children}
                {error &&
                    <FormError style={styles.error} error={error} />
                }
            </div>
        )
    }

}
