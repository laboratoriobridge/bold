import React from 'react'

import { ExternalStyles, useStyles } from '../../styles'

import { FormError } from './FormError'
import { FormLabel, FormLabelProps } from './FormLabel'

export interface FormControlProps {
  htmlFor?: string
  label?: FormLabelProps['label']
  labelId?: FormLabelProps['id']
  errorId?: string
  required?: FormLabelProps['required']
  error?: React.ReactNode
  children?: React.ReactNode
  style?: ExternalStyles
}

export function FormControl(props: FormControlProps) {
  const { children, htmlFor, error, label, labelId, errorId, required, style } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <div className={css(classes.formControl, style)}>
      {label && <FormLabel id={labelId} required={required} style={classes.label} htmlFor={htmlFor} label={label} />}
      {children}
      {error && (
        <FormError id={errorId} style={classes.error} role='alert'>
          {error}
        </FormError>
      )}
    </div>
  )
}

const createStyles = () => ({
  formControl: {},
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    lineHeight: '20px',
  },
  error: {
    marginTop: '0.25rem',
    lineHeight: '20px',
  },
})
