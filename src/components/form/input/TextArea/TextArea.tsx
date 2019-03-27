import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { createStyles as createTextInputBaseStyles, InputStatus } from '../TextInput/TextInputBase'

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  status?: InputStatus
  style?: Interpolation
}

export function TextArea(props: TextAreaProps) {
  const { status, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  const valueLength = () => {
    return props.value && typeof props.value === 'string' && props.value.length
  }

  const defaultValueLength = () => {
    return props.defaultValue && typeof props.defaultValue === 'string' && props.defaultValue.length
  }

  const currentLength = valueLength() || defaultValueLength() || 0

  const className = css(classes.input, status === 'error' && classes.error, style)

  return (
    <div>
      <textarea className={className} {...rest} />
      {props.maxLength && (
        <div className={classes.counter}>
          {currentLength}/{props.maxLength} caracteres
        </div>
      )}
    </div>
  )
}

const createStyles = (theme: Theme, { status }: TextAreaProps) => ({
  ...createTextInputBaseStyles(theme),
  counter: {
    textAlign: 'right',
    color: status === 'error' && theme.pallete.status.danger.main,
  } as CSSProperties,
})
