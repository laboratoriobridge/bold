import { BaseFieldProps, withField } from '../../finalForm/Field'
import { TextInput, TextInputProps } from '../../input/TextInput/TextInput'

export type TextFieldProps = BaseFieldProps<TextInputProps, string>

export const TextField = withField<string, TextInputProps>(TextInput)
