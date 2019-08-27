import { useRef } from 'react'

import { randomStr } from '../util/string'

export interface UseFormControlProps {
  id?: string
  label?: string
  errorText?: string
  required?: boolean
}

export function useFormControl(props: UseFormControlProps) {
  const { id, label, errorText, required } = props

  const labelIdRef = useRef(`label-${randomStr()}`)
  const errorIdRef = useRef(`error-${randomStr()}`)

  const labelId = label && !id ? labelIdRef.current : undefined
  const errorId = errorText ? errorIdRef.current : undefined

  return {
    getFormControlProps: () => ({
      label,
      htmlFor: id,
      labelId,
      errorId,
      error: errorText,
      required,
    }),
    getInputProps: () => ({
      'aria-labelledby': labelId,
      'aria-invalid': !!errorText ? true : undefined,
      'aria-errormessage': errorId,
    }),
  }
}
