import { BaseFieldProps, withField } from '../../finalForm/Field'
import { TextArea, TextAreaProps } from '../../input/TextArea/TextArea'

export type TextAreaFieldProps = BaseFieldProps<TextAreaProps>

export const TextAreaField = withField(TextArea)
