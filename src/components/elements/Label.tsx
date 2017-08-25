import * as React from 'react'
import * as classnames from 'classnames'

export interface LabelProps {
    className?: string
    disabled?: boolean
}

export class Label extends React.Component<LabelProps, any> {

    render() {
        const classes = classnames('label', this.props.className, {
            'is-disabled': this.props.disabled
        })

        return (
            <label className={classes}>{this.props.children}</label>
        )
    }

}
