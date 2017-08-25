import * as React from 'react'
import { ComposedLabelProps, ComposedLabel } from './ComposedLabel'

export interface TextLabelProps extends ComposedLabelProps {
    value: string
}

export class TextLabel extends React.Component<TextLabelProps> {

    render() {
        const { value, ...rest } = this.props
        return (
            <ComposedLabel {...rest} >
                {this.props.value}
            </ComposedLabel>
        )
    }

}
