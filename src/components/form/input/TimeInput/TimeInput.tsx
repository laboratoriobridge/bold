import * as React from 'react'
import { conformToMask } from 'react-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { Omit } from '../../../../util'
import { masks } from '../../../../util/masks'
import { MaskedInput, MaskedInputProps } from '../MaskedInput/MaskedInput'

export interface TimeInputProps extends Omit<MaskedInputProps, 'onChange'> {
    /**
     * Original input change event handler
     */
    onInputChange?: MaskedInputProps['onChange']

    onChange?(value: string): any
}

export class TimeInput extends React.PureComponent<TimeInputProps> {
    render() {
        const { onChange, ...rest } = this.props
        return (
            <MaskedInput
                mask={masks.time}
                placeholder='hh:mm'
                pipe={createAutoCorrectedDatePipe('HH:MM')}
                {...rest}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e) {
            return this.props.onChange(null)
        }
        if (this.props.onChange) {
            const value = e.target.value
            this.props.onChange(value)
        }
        if (this.props.onInputChange) {
            return this.props.onInputChange(e)
        }
    }

    handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            const value = e.target.value
            if (value) {
                const paddedValue = padTime(value)
                this.props.onChange(paddedValue)
            }
        }

        if (this.props.onBlur) {
            // Call original blur handler (if existent)
            return this.props.onBlur(e)
        }
    }
}

export const padTime = (value: string): string => {
    const numbersOnly = value.replace(/[^\d]/g, '')
    if (numbersOnly.length < 4) {
        const paddedValue = numbersOnly.padEnd(4, '0')
        const conformedValue = conformToMask(paddedValue, masks.time, {})
        return conformedValue.conformedValue
    }
    return value
}
