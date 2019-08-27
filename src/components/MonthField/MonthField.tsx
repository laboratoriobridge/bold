import React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { Omit } from '../../util'
import { MaskedTextField, MaskedTextFieldProps } from '../MaskedTextField'
import { MonthPicker, ReferenceMonth } from '../MonthPicker'
import { Popper, PopperController } from '../Popper'

export interface MonthFieldProps extends Omit<MaskedTextFieldProps, 'value' | 'onChange'> {
  value?: ReferenceMonth
  onChange?(referenceMonth: ReferenceMonth): void
}

export class MonthField extends React.PureComponent<MonthFieldProps> {
  render() {
    const { value } = this.props

    return (
      <Popper renderTarget={this.renderInput} placement='bottom-start' closeOnOutsideClick={true} block>
        {(ctrl: PopperController) => (
          <MonthPicker month={value && value.month} year={value && value.year} onChange={this.onValueChange(ctrl)} />
        )}
      </Popper>
    )
  }

  private renderInput = (ctrl: PopperController) => {
    const { onChange, value, ...rest } = this.props

    return (
      <MonthInput
        onFocus={ctrl.show}
        onChange={this.onInputChange}
        value={format(value)}
        onIconClick={ctrl.toggle}
        icon='calendarOutline'
        {...rest}
      />
    )
  }

  private onValueChange = (ctrl: PopperController) => (referenceMonth: ReferenceMonth) => {
    ctrl.hide()
    this.props.onChange(referenceMonth)
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      const value = e.target.value

      if (isValidInput(value)) {
        this.props.onChange({ month: +value.substr(0, 2) - 1, year: +value.substr(3) })
      }
    } else {
      this.props.onChange(null)
    }
  }
}

export type MonthInputProps = Omit<MaskedTextFieldProps, 'mask'>

export const MonthInput = (props: MonthInputProps) => {
  return (
    <MaskedTextField
      mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      pipe={createAutoCorrectedDatePipe('mm/yyyy')}
      placeholder='mm/yyyy'
      {...props}
    />
  )
}

export const format = (value: ReferenceMonth) => {
  if (!value || !value.year || value.month == null) {
    return null
  }

  if (value.month < 9) {
    return `0${value.month + 1}/${value.year}`
  } else {
    return `${value.month + 1}/${value.year}`
  }
}

export const isValidInput = (value: string) => {
  return /\d\d\/\d\d\d\d/.test(value)
}
