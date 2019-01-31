import moment = require('moment')
import * as React from 'react'
import { Omit } from 'react-dropzone'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { MaskedInput, MaskedInputProps } from '../../../form/input/MaskedInput/MaskedInput'
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
                {(ctrl: PopperController) =>
                    <MonthPicker
                        month={value && value.month}
                        year={value && value.year}
                        onChange={this.onValueChange(ctrl)}
                    />
                }
            </Popper>
        )
    }

    private renderInput = (ctrl: PopperController) => {
        const { onChange, value, ...rest } = this.props
        const formatedValue = value && moment(new Date(value.year, value.month)).format('MM/YYYY')
        return (
            <MonthInput
                onFocus={ctrl.show}
                onChange={this.onInputChange}
                value={formatedValue}
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
        if (e && e.target) {
            const convertedValue = moment(e.target.value, 'MM/YYYY', true)
            if (convertedValue.isValid()) {
                this.props.onChange({ month: convertedValue.month(), year: convertedValue.year() })
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
