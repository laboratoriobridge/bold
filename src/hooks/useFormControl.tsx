import { useRef } from 'react'

import { randomStr } from '../util/string'

export interface UseFormControlProps {
  id?: string
  required?: boolean
  label?: React.ReactNode
  error?: React.ReactNode
  inline?: boolean
}

export function useFormControl(props: UseFormControlProps) {
  const { id, label, error, required, inline } = props

  const labelIdRef = useRef(`label-${randomStr()}`)
  const errorIdRef = useRef(`error-${randomStr()}`)

  const labelId = label && !id ? labelIdRef.current : undefined
  const errorId = error ? errorIdRef.current : undefined

  return {
    getFormControlProps: () => ({
      label,
      error,
      htmlFor: id,
      labelId,
      errorId,
      required,
      inline,
    }),
    getInputProps: () => ({
      'aria-labelledby': labelId,
      'aria-invalid': !!error ? true : undefined,
      'aria-errormessage': errorId,
    }),
  }
}
