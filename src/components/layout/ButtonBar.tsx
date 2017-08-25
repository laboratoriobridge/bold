import * as React from 'react'
import * as classnames from 'classnames'
import { UtilProps, helpersClassnames } from '../../util/Util'

export interface ButtonBarProps extends UtilProps {
    className?: string
}

export class ButtonBar extends React.Component<ButtonBarProps> {

    render() {
        const classes: string = classnames('button-bar', this.props.className, helpersClassnames(this.props))

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }

}
