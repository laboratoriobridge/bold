import * as React from 'react'
import * as classnames from 'classnames'
import { UtilProps, helpersClassnames, filterProps } from '../../util/Util'

export interface IconProps extends UtilProps {
    icon: string
    className?: string
    size?: 'small' | 'medium' | 'large'
    onMouseOver?: Function
    onMouseLeave?: Function
    title?: string
}

export class Icon extends React.Component<IconProps, any> {

    static defaultProps: IconProps = {
        icon: ''
    }

    render() {
        const classes: string = classnames('rnicons', 'rnicons-' + this.props.icon, this.props.className, helpersClassnames(this.props), {
            'is-small': this.props.size && this.props.size === 'small',
            'is-medium': this.props.size && this.props.size === 'medium',
            'is-large': this.props.size && this.props.size === 'large'
        })
        return (
            <i {...filterProps(this.props, ...excludedProps) } title={this.props.title} className={classes}></i>
        )
    }

}

const excludedProps = [
    'icon'
]
