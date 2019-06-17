import { Input, InputProps } from '../../../components/Input'
import { BaseFieldProps, withField } from '../../Field'

export type HiddenFieldProps = BaseFieldProps<InputProps>

export const HiddenField = withField(Input, {
  type: 'hidden',
})
