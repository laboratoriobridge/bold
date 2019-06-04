import { MonthPickerInput, MonthPickerInputProps } from '../../../MonthPicker'
import { BaseFieldProps, withField } from '../../finalForm/Field'

export type MonthFieldProps = BaseFieldProps<MonthPickerInputProps>

export const MonthField = withField(MonthPickerInput)
