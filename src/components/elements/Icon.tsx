import * as React from 'react'

export interface IconProps {
    icon: string
    className?: string
    size?: 'small' | 'medium' | 'large' | 'is-12px' | 'gigantic'
    onMouseOver?: Function
    onMouseLeave?: Function
    title?: string
}

export class Icon extends React.Component<IconProps, any> {

    render() {
        return (
            <i title={this.props.title} />
        )
    }

}
