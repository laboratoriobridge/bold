import React, { CSSProperties } from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util/types'
import { FormControl, FormError } from '../FormControl'
import { createStyles as createTextInputBaseStyles } from '../TextField/TextInputBase'

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>,
    UseFormControlProps {
  style?: ExternalStyles
  resize?: CSSProperties['resize']
}

export function TextArea(props: TextAreaProps) {
  const { style, label, resize, ...rest } = props
  const { error, ...restFormControlProps } = props

  const valueLength = props.value && typeof props.value === 'string' && props.value.length
  const defaultValueLength = props.defaultValue && typeof props.defaultValue === 'string' && props.defaultValue.length
  const currentLength = valueLength || defaultValueLength || 0

  const { getFormControlProps } = useFormControl(restFormControlProps)
  const { getInputProps } = useFormControl(props)

  const inputProps = getInputProps()
  const invalid = inputProps['aria-invalid']
  const errorId = inputProps['aria-errormessage']

  const { classes, css } = useStyles(createStyles, { invalid })
  const className = css(classes.input, invalid && classes.invalid, style, { resize })

  return (
    <FormControl {...getFormControlProps()}>
      <textarea className={className} {...inputProps} {...rest} />

      <div className={classes.footer}>
        {error && (
          <FormError id={errorId} role='alert'>
            {error}
          </FormError>
        )}

        {props.maxLength && (
          <div className={classes.counter}>
            {currentLength}/{props.maxLength} caracteres
          </div>
        )}
      </div>
    </FormControl>
  )
}

const createStyles = (theme: Theme, { invalid }) => ({
  ...createTextInputBaseStyles(theme),
  footer: {
    display: 'flex',
  },
  counter: {
    marginLeft: 'auto',
    color: invalid && theme.pallete.status.danger.main,
  } as CSSProperties,
})
