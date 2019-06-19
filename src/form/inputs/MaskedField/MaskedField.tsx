import { MaskedInput, MaskedInputProps } from '../../../components/MaskedInput'
import { BaseFieldProps, withField } from '../../Field'

export type MaskedFieldProps = BaseFieldProps<MaskedInputProps>

export const MaskedField = withField(MaskedInput)
