import React, { CSSProperties } from 'react'

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
  inline?: boolean
  children?: React.ReactNode
  style?: ExternalStyles
}

export function FormControl(props: FormControlProps) {
  const { children, htmlFor, error, label, labelId, errorId, inline, required, style } = props
  const { classes, css } = useStyles(createStyles)

  const isInline = inline && label

  return (
    <div className={css([classes.formControl, isInline && classes.formControlInline, style])}>
      {label && (
        <FormLabel
          id={labelId}
          required={required}
          style={css(classes.label, isInline && classes.labelInline)}
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
