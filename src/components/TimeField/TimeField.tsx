import React from 'react'
import { conformToMask } from 'react-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { Omit } from '../../util'
import { MaskedTextField, MaskedTextFieldProps } from '../MaskedTextField'

const mask = [/\d/, /\d/, ':', /\d/, /\d/]

export interface TimeFieldProps extends Omit<MaskedTextFieldProps, 'onChange'> {
  /**
   * Original input change event handler
   */
  onInputChange?: MaskedTextFieldProps['onChange']

  onChange?(value: string): any
}

export function TimeField(props: TimeFieldProps) {
  const { onChange, onInputChange, ...rest } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) {
      return onChange(null)
    }
    if (onChange) {
      const value = e.target.value
      onChange(value)
    }
    if (onInputChange) {
      return onInputChange(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = e.target.value
      if (value) {
        const paddedValue = padTime(value)
        onChange(paddedValue)
      }
    }

    if (props.onBlur) {
      // Call original blur handler (if existent)
      return props.onBlur(e)
    }
  }

  return (
    <MaskedTextField
      mask={mask}
      placeholder='hh:mm'
      pipe={createAutoCorrectedDatePipe('HH:MM')}
      {...rest}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

export const padTime = (value: string): string => {
  const numbersOnly = value.replace(/[^\d]/g, '')
  if (numbersOnly.length < 4) {
    const paddedValue = numbersOnly.padEnd(4, '0')
    const conformedValue = conformToMask(paddedValue, mask, {})
    return conformedValue.conformedValue
  }
  return value
}
