import * as React from 'react'
import { ComposedLabelProps, ComposedLabel } from './ComposedLabel'
import DateUtil from '../../../util/DateUtil'

export interface DateLabelProps extends ComposedLabelProps {
    value: string
}

export class DateLabel extends React.Component<DateLabelProps, any> {

    render() {
        const { value, ...rest } = this.props
        return (
            <ComposedLabel {...rest} >
                {value && DateUtil.asClientFormat(value)}
            </ComposedLabel>
        )
    }

}
