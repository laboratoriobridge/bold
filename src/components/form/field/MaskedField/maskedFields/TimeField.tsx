import * as React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { masks } from '../../../../../util/masks'
import { MaskedField, MaskedFieldProps } from '../MaskedField'

export interface TimeFieldProps extends MaskedFieldProps {

}

export class TimeField extends React.Component<TimeFieldProps> {

    static defaultProps: Partial<TimeFieldProps> = {}

    render() {
        return (
            <MaskedField
                mask={masks.time}
                placeholder='hh:mm'
                pipe={createAutoCorrectedDatePipe('HH:MM')}
                format={this.format}
                {...this.props}
            />
        )
    }

    format = (value: string) => {
        // Omit seconds in case the initial field value is in format 'HH:mm:ss'
        return value ? value.slice(0, 5) : value
    }
}
