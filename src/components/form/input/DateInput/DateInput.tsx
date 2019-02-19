import React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { masks } from '../../../../util/masks'
import { Omit } from '../../../../util/types'
import { MaskedInput, MaskedInputProps } from '../../input/MaskedInput/MaskedInput'

export interface DateInputProps extends Omit<MaskedInputProps, 'onChange' | 'value'> {
    value?: Date
    onInputChange?: MaskedInputProps['onChange']
    onChange?(date: Date | null): void
}

const formatter = new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
})

export class DateInput extends React.Component<DateInputProps> {

    static defaultProps: Partial<DateInputProps> = {
    }

    render() {
        const { value, ...rest } = this.props
        return (
            <MaskedInput
                value={value ? formatter.format(value) : undefined}
                mask={masks.date}
                placeholder='dd/mm/yyyy'
                pipe={createAutoCorrectedDatePipe('dd/mm/yyyy')}
                autoComplete='off'
                {...rest}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onInputChange) {
            this.props.onInputChange(e)
        }

        if (!e || !e.target.value) {
            this.props.onChange(null)
            return
        }

        const value = e.target.value
        const match: RegExpMatchArray = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
        if (match) {
            const date = new Date(parseInt(match[3], 10), parseInt(match[2], 10) - 1, parseInt(match[1], 10))
            this.props.onChange(date)
        }
    }
}
