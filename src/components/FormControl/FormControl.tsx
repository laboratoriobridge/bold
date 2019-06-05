import React from 'react'

import { FormError } from './FormError'
import { FormLabel, FormLabelProps } from './FormLabel'

export interface FormControlProps {
  id?: string
  name?: string
  label?: FormLabelProps['label']
  required?: FormLabelProps['required']
  error?: React.ReactNode
  children?: React.ReactNode
}

export function FormControl(props: FormControlProps) {
  const { children, id, name, error, label, required } = props
  const styles = {
    label: {
      display: 'block',
      marginBottom: '0.25rem',
      lineHeight: '20px',
    },
    error: {
      marginTop: '0.25rem',
      lineHeight: '20px',
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
