import * as React from 'react'

export interface LabelProps {
    value: React.ReactNode
}

export class Label extends React.Component<LabelProps, any> {

    render() {
        return (
            <label>{this.props.value}</label>
        )
    }

}
