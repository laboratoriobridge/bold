import { TextArea, TextAreaProps } from '../../../components/TextArea'
import { BaseFieldProps, withField } from '../../Field'

export type TextAreaFieldProps = BaseFieldProps<TextAreaProps>

export const TextAreaField = withField(TextArea)
