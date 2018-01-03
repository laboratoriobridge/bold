import * as React from 'react'
import { Text } from '../typography/Text'

export interface LabelProps {
    value: React.ReactNode
}

export class Label extends React.Component<LabelProps, any> {

    render() {
        return (
            <label><Text size={0.75} weight='bold'>{this.props.value}</Text></label>
        )
    }

}
