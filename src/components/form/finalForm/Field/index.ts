import { FieldProps } from './Field'

export * from './Field'
export { withField } from './withField'

/**
 * Type to be extended by component props which are a Field-based versions of input elements
 * This type exposes props from Field that must be public and overridables
 */
export type BaseFieldProps<T> = T & Pick<FieldProps,
    'name' | 'label' | 'hasWrapper' | 'parse' | 'format' | 'convert' | 'validate'>

/**
 * Extract from a BaseFieldProps object only props that can be safely passed down to input elements
 * This functions removes the Field specific props made available by the usage of BaseFieldProps
 */
export function extractInputProps(fieldProps: BaseFieldProps<{}>) {
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
