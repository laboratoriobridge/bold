import moment = require('moment')
import * as React from 'react'
import { Omit } from 'react-dropzone'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { MaskedInput, MaskedInputProps } from '../../../form/input/MaskedInput/MaskedInput'
import { Popper, PopperController } from '../../Popper'

import { MonthPicker } from '../MonthPicker/MonthPicker'

export interface MonthPickerInputProps extends MonthInputProps {
    onValueChange(date: Date): void
}

export interface MonthPickerInputState {
    date: Date
}

export class MonthPickerInput extends React.PureComponent<MonthPickerInputProps, MonthPickerInputState> {

    constructor(props: MonthPickerInputProps) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return (
            <Popper renderTarget={this.renderInput} placement='bottom-start' closeOnOutsideClick={true} block>
                {(ctrl: PopperController) =>
                    <MonthPicker
                        month={this.state.date.getMonth()}
                        year={this.state.date.getFullYear()}
                        onValueChange={this.onValueChange(ctrl)}
                    />
                }
            </Popper>
        )
    }

    renderInput = (ctrl: PopperController) => {
        const { onValueChange, ...rest } = this.props
        const { date } = this.state
        const value = moment(date).format('MM/YYYY')
        return (
            <MonthInput
                onFocus={ctrl.show}
                onChange={this.onInputChange}
                value={value}
                onIconClick={ctrl.toggle}
                icon='calendar'
                {...rest}
            />
        )
    }

    onValueChange = (ctrl: PopperController) => (date: Date) => {
        ctrl.hide()
        this.setState({ date })
        this.props.onValueChange(date)
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        const mom = moment(value, 'MM/YYYY', true)
        if (mom.isValid()) {
            this.setState({ date: mom.toDate() })
            this.props.onValueChange(mom.toDate())
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
