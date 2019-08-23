import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util/types'
import { createStyles as createTextInputBaseStyles } from '../TextField/TextInputBase'

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  style?: ExternalStyles
  invalid?: boolean
}

export function TextArea(props: TextAreaProps) {
  const { invalid, style, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  const valueLength = () => {
    return props.value && typeof props.value === 'string' && props.value.length
  }

  const defaultValueLength = () => {
    return props.defaultValue && typeof props.defaultValue === 'string' && props.defaultValue.length
  }

  const currentLength = valueLength() || defaultValueLength() || 0

  const className = css(classes.input, invalid && classes.invalid, style)

  return (
    <div>
      <textarea className={className} aria-invalid={invalid ? 'true' : undefined} {...rest} />
      {props.maxLength && (
        <div className={classes.counter}>
          {currentLength}/{props.maxLength} caracteres
        </div>
      )}
    </div>
  )
}

const createStyles = (theme: Theme, { invalid }: TextAreaProps) => ({
  ...createTextInputBaseStyles(theme),
  counter: {
    textAlign: 'right',
    color: invalid && theme.pallete.status.danger.main,
  } as CSSProperties,
})
