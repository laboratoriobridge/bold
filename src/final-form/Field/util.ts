import { FieldRenderProps } from 'react-final-form'

import { Omit } from '../../util'

import { FieldProps } from './Field'

/**
 * Return the current field's active error.
 *
 * @param fieldProps The react-final-form field render props.
 */
export const getFieldError = (fieldProps: FieldRenderProps<HTMLElement>): any => {
  const { meta } = fieldProps
  return (meta.touched && meta.error) || (!meta.dirtySinceLastSubmit && meta.submitError)
}

export interface BaseInputProps {
  name?: string
}

/**
 * Type to be extended by component props which are a Field-based versions of input elements
 * This type exposes props from Field that must be public and overridables
 */
export type BaseFieldProps<T extends BaseInputProps, K = any> = Omit<T, 'name'> &
  Pick<FieldProps<K>, 'name' | 'label' | 'hasWrapper' | 'parse' | 'format' | 'convert' | 'required' | 'validate'>

/**
 * Extract from a BaseFieldProps object only props that can be safely passed down to input elements
 * This functions removes the Field specific props made available by the usage of BaseFieldProps
 */
export function extractInputProps<T extends BaseInputProps>(fieldProps: BaseFieldProps<T, any>) {
  const { label, hasWrapper, parse, format, convert, validate, ...rest } = fieldProps

  return rest
}
