import { TextInput, TextInputProps } from '../../../components/TextInput'
import { BaseFieldProps, withField } from '../../Field'

export type TextFieldProps = BaseFieldProps<TextInputProps, string>

export const TextField = withField<string, TextInputProps>(TextInput)
