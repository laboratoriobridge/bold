import React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { Omit } from '../../../util'
import { MaskedInput, MaskedInputProps } from '../../MaskedInput'
import { Popper, PopperController } from '../../Popper'
import { MonthPicker, ReferenceMonth } from '../MonthPicker/MonthPicker'

export interface MonthPickerInputProps extends Omit<MaskedInputProps, 'value' | 'onChange'> {
  value?: ReferenceMonth
  onChange?(referenceMonth: ReferenceMonth): void
}

export class MonthPickerInput extends React.PureComponent<MonthPickerInputProps> {
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

export type MonthInputProps = Omit<MaskedInputProps, 'mask'>

const MonthInput = (props: MonthInputProps) => {
  return (
    <MaskedInput
      mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      pipe={createAutoCorrectedDatePipe('mm/yyyy')}
      placeholder='mm/yyyy'
      {...props}
    />
  )
}

const format = (value: ReferenceMonth) => {
  if (!value || !value.year || !value.month) {
    return null
  }

  if (value.month < 10) {
    return `0${value.month + 1}/${value.year}`
  } else {
    return `${value.month + 1}/${value.year}`
  }
}

const isValidInput = (value: string) => {
  return /\d\d\/\d\d\d\d/.test(value)
}
