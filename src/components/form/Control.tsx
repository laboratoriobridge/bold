import * as React from 'react'
import * as classnames from 'classnames'
import { helpersClassnames, UtilProps } from '../../util/Util'
import { Icon } from '../elements/Icon'

export interface ControlProps extends UtilProps {
    className?: string
    icon?: string
    iconRight?: boolean
}


export class Control extends React.Component<ControlProps, any> {

    render() {
        const controlClasses = classnames('control', this.props.className, helpersClassnames(this.props), {
            'has-icon': this.props.icon !== undefined,
            'has-icon-right': this.props.iconRight
        })

        return (
            <div className={controlClasses}>
                {this.props.children}
                {this.props.icon && <span className='icon'><Icon icon={this.props.icon} /></span>}
            </div>
        )
    }

}
