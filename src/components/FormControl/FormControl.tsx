import React, { CSSProperties } from 'react'

import { useStyles } from '../../styles'

import { FormError } from './FormError'
import { FormLabel, FormLabelProps } from './FormLabel'

export interface FormControlProps {
  htmlFor?: string
  label?: FormLabelProps['label']
  labelId?: FormLabelProps['id']
  errorId?: string
  required?: FormLabelProps['required']
  error?: React.ReactNode
  inline?: boolean
  children?: React.ReactNode
}

export function FormControl(props: FormControlProps) {
  const { children, htmlFor, error, label, labelId, errorId, inline, required } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <div className={css([classes.formControl, inline && classes.formControlInline])}>
      {label && (
        <FormLabel
          id={labelId}
          required={required}
          style={css(classes.label, inline && classes.labelInline)}
          htmlFor={htmlFor}
          label={label}
        />
      )}
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
  formControl: {} as CSSProperties,
  formControlInline: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: 'min-content',
    alignItems: 'baseline',
    gridGap: '0.5rem',
  } as CSSProperties,
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    lineHeight: '20px',
  } as CSSProperties,
  labelInline: {
    whiteSpace: 'nowrap',
    marginBottom: 0,
  } as CSSProperties,
  error: {
    marginTop: '0.25rem',
    lineHeight: '20px',
  } as CSSProperties,
})
