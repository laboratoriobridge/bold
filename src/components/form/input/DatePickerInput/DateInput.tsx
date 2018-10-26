import * as React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { getUserLocale } from '../../../../util/locale'
import { masks } from '../../../../util/masks'
import { Omit } from '../../../../util/types'
import { MaskedInput, MaskedInputProps } from '../../input/MaskedInput/MaskedInput'

export interface DateInputProps extends Omit<MaskedInputProps, 'onChange' | 'value'> {
    value?: Date
    onChange?(date: Date | null): void
}

const formatter = new Intl.DateTimeFormat(getUserLocale(), {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
})

export class DateInput extends React.Component<DateInputProps> {

    static defaultProps: Partial<DateInputProps> = {
    }

    render() {
        const { value } = this.props
        return (
            <MaskedInput
                {...this.props}
                value={value && formatter.format(value)}
                mask={masks.date}
                onChange={this.handleChange}
                placeholder='dd/mm/yyyy'
                pipe={createAutoCorrectedDatePipe('dd/mm/yyyy')}
            />
        )
    }

    handleChange = (e) => {
        const value = e.target.value

        if (!value) {
            this.props.onChange(null)
        }

        const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)

        try {
            const date = new Date(match[3], match[2] - 1, match[1])
            this.props.onChange(date)
        } catch (err) {
            // noop
        }
    }
}
