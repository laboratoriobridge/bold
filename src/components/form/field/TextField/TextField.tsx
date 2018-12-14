import { BaseFieldProps, withField } from '../../finalForm/Field'
import { TextInput } from '../../input/TextInput/TextInput'

export type TextFieldProps = BaseFieldProps<TextInput>

export const TextField = withField(TextInput)
