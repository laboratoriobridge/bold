import { FieldRenderProps } from 'react-final-form'

import { FieldProps } from './Field'

/**
 * Return the current field's active error.
 *
 * @param fieldProps The react-final-form field render props.
 */
export const getFieldError = (fieldProps: FieldRenderProps): any => {
    const { meta } = fieldProps
    return meta.touched && meta.error || !meta.dirtySinceLastSubmit && meta.submitError
}

/**
 * Type to be extended by component props which are a Field-based versions of input elements
 * This type exposes props from Field that must be public and overridables
 */
export type BaseFieldProps<T, K = any> = T & Pick<FieldProps<K>,
    'name' | 'label' | 'hasWrapper' | 'parse' | 'format' | 'convert' | 'required' | 'validate'>

/**
 * Extract from a BaseFieldProps object only props that can be safely passed down to input elements
 * This functions removes the Field specific props made available by the usage of BaseFieldProps
 */
export function extractInputProps(fieldProps: BaseFieldProps<{}, any>) {
    const {
        label,
        hasWrapper,
        parse,
        format,
        convert,
        validate,
        ...rest
    } = fieldProps

    return rest
}
