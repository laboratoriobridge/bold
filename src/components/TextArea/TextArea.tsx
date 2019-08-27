import React, { CSSProperties } from 'react'

import { useFormControl } from '../../hooks/useFormControl'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util/types'
import { FormControl } from '../FormControl'
import { createStyles as createTextInputBaseStyles } from '../TextField/TextInputBase'

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  style?: ExternalStyles
  label?: string
  errorText?: string
}

export function TextArea(props: TextAreaProps) {
  const { style, label, errorText, ...rest } = props

  const valueLength = props.value && typeof props.value === 'string' && props.value.length
  const defaultValueLength = props.defaultValue && typeof props.defaultValue === 'string' && props.defaultValue.length
  const currentLength = valueLength || defaultValueLength || 0

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()
  const invalid = inputProps['aria-invalid']

  const { classes, css } = useStyles(createStyles, { invalid })
  const className = css(classes.input, invalid && classes.invalid, style)

  return (
    <FormControl {...getFormControlProps()}>
      <textarea className={className} {...inputProps} {...rest} />

      {props.maxLength && (
        <div className={classes.counter}>
          {currentLength}/{props.maxLength} caracteres
        </div>
      )}
    </FormControl>
  )
}

const createStyles = (theme: Theme, { invalid }) => ({
  ...createTextInputBaseStyles(theme),
  counter: {
    textAlign: 'right',
    color: invalid && theme.pallete.status.danger.main,
  } as CSSProperties,
})
