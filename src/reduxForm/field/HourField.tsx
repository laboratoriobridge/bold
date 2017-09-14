import * as React from 'react'
import { TextField } from './TextField'

export const normalize = (value) => {
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length < 3) {
        return onlyNums
    } else {
        return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2, 4)
    }
}

export interface HourFieldProps {
    name: string
}

export class HourField extends React.Component<HourFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={normalize} />
        )
    }

}
