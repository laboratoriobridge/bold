import * as classnames from 'classnames'
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
        const classes: string = classnames('rnicons', 'rnicons-' + this.props.icon, this.props.className, {
            'is-small': this.props.size && this.props.size === 'small',
            'is-medium': this.props.size && this.props.size === 'medium',
            'is-large': this.props.size && this.props.size === 'large',
            'is-gigantic': this.props.size && this.props.size === 'gigantic',
            'is-12px': this.props.size && this.props.size === 'is-12px',
        })
        return (
            <i title={this.props.title} className={classes} />
        )
    }

}
