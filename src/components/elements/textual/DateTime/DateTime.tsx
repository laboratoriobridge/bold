import * as moment from 'moment'
import * as React from 'react'

import { formatDateOrDateTime, formats } from '../../../../util/dateTime'

export const dateTimeFormats = formats

export interface DateTimeProps {
    value: moment.Moment | string | Date
    mode?: 'date' | 'time' | 'dateTime'
    render?(moment: moment.Moment): React.ReactNode
}

export class DateTime extends React.PureComponent<DateTimeProps> {

    render() {
        const { value, mode, render } = this.props

        const mom = moment.isMoment(value) ? value : moment(value)

        const formatted =
            (render && render(mom)) ||
            (mode && mom.format(formats[mode])) ||
            (typeof value === 'string' && formatDateOrDateTime(value)) ||
            mom.format(formats.dateTime)

        return (
            <span title={mom.format('LLL')}>{formatted}</span>
        )
    }
}
