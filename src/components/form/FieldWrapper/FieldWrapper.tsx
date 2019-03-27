import React from 'react'

import { FormError } from '../FormError'
import { FormLabel, FormLabelProps } from '../FormLabel'

export interface FieldWrapperProps {
  id?: string
  name?: string
  label?: FormLabelProps['label']
  required?: FormLabelProps['required']
  error?: React.ReactNode
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
        {label && <FormLabel required={required} style={styles.label} htmlFor={id} label={label} />}
        {children}
        {error && <FormError style={styles.error}>{error}</FormError>}
      </div>
    )
  }
}
