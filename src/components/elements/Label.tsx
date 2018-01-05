import * as React from 'react'
import { Text } from './Text/Text'

export interface LabelProps {
    value: React.ReactNode
}

export class Label extends React.Component<LabelProps, any> {

    render() {
        return (
            <Text tag='label' size={0.75} weight='bold'>{this.props.value}</Text>
        )
    }

}
