import * as React from 'react'
import * as classnames from 'classnames'
import { UtilProps } from '../../util/Util'

export interface LinhaProps extends UtilProps {
    className?: string
    size?: 'medium'
}

export class Linha extends React.Component<LinhaProps, any> {

    render() {
        const classes = classnames({
            'medium': this.props.size && this.props.size === 'medium'
        })
        return (
            <hr className={classes} />
        )
    }

}
