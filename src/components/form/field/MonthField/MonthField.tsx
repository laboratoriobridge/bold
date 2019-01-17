import { MonthPickerInput, MonthPickerInputProps } from '../../../elements/MonthPicker'
import { BaseFieldProps, withField } from '../../finalForm/Field'

export type MonthFieldProps = BaseFieldProps<MonthPickerInputProps>

export const MonthField = withField(MonthPickerInput)
