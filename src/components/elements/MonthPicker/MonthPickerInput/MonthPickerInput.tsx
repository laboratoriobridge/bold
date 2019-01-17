import moment = require('moment')
import * as React from 'react'
import { Omit } from 'react-dropzone'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { MaskedInput, MaskedInputProps } from '../../../form/input/MaskedInput/MaskedInput'
import { Popper, PopperController } from '../../Popper'

import { MonthPicker } from '../MonthPicker/MonthPicker'

export interface MonthPickerInputProps extends Omit<MaskedInputProps, 'value' | 'onChange'> {
    value?: Date
    onChange?(date: Date): void
}

export class MonthPickerInput extends React.PureComponent<MonthPickerInputProps> {

    render() {

        const { value } = this.props

        return (
            <Popper renderTarget={this.renderInput} placement='bottom-start' closeOnOutsideClick={true} block>
                {(ctrl: PopperController) =>
                    <MonthPicker
                        month={value && value.getMonth()}
                        year={value && value.getFullYear()}
                        onChange={this.onValueChange(ctrl)}
                    />
                }
            </Popper>
        )
    }

    private renderInput = (ctrl: PopperController) => {
        const { onChange, value, ...rest } = this.props
        const formatedValue = value && moment(value).format('MM/YYYY')
        return (
            <MonthInput
                onFocus={ctrl.show}
                onChange={this.onInputChange}
                value={formatedValue}
                onIconClick={ctrl.toggle}
                icon='calendar'
                {...rest}
            />
        )
    }

    private onValueChange = (ctrl: PopperController) => (date: Date) => {
        ctrl.hide()
        this.props.onChange(date)
    }

    private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        const mom = moment(value, 'MM/YYYY', true)
        if (mom.isValid()) {
            this.props.onChange(mom.toDate())
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
