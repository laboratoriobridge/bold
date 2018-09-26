import * as moment from 'moment'
import * as React from 'react'

export interface DateTimeProps {
    value: moment.Moment | string | number | Date
    format?: string
}

export class DateTime extends React.PureComponent<DateTimeProps> {

    static defaultProps: Partial<DateTimeProps> = { format: 'LLL' }

    render() {
        const { value, format } = this.props

        const mom = moment(value)

        if (!mom.isValid()) {
            return null
        }

        return (
            <time>{mom.format(format)}</time>
        )
    }
}
