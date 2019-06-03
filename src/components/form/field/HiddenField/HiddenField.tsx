import { BaseFieldProps, withField } from '../../finalForm/Field'
import { Input, InputProps } from '../../input/Input/Input'

export type HiddenFieldProps = BaseFieldProps<InputProps>

export const HiddenField = withField(Input, {
  type: 'hidden',
})
