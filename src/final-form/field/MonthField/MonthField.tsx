import { MonthPickerInput, MonthPickerInputProps } from '../../../components/MonthPicker'
import { BaseFieldProps, withField } from '../../Field'

export type MonthFieldProps = BaseFieldProps<MonthPickerInputProps>

export const MonthField = withField(MonthPickerInput)
