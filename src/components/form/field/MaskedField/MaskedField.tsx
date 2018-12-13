import { BaseFieldProps, withField } from '../../finalForm/Field'
import { MaskedInput, MaskedInputProps } from '../../input/MaskedInput/MaskedInput'

export type MaskedFieldProps = BaseFieldProps<MaskedInputProps>

export const MaskedField = withField(MaskedInput)
