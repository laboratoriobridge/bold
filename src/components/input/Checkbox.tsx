import * as React from 'react'
import * as classnames from 'classnames'
import { WrappedFieldInputProps } from 'redux-form'
import { Input } from './Input'
import { Icon } from '../elements/Icon'


export interface CheckboxProps extends Partial<WrappedFieldInputProps> {
    checked?: boolean
    disabled?: boolean
    label?: string
    onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void
}

export class Checkbox extends React.Component<CheckboxProps, any> {

    render() {
        const classes = classnames('checkbox', {
            'disabled': this.props.disabled
        })
        const { label, children, ...rest } = this.props
        return (
            <label className={classes} >
                <Input {...rest} type='checkbox' />
                <Icon className='check-indicator' icon='checkbox-check' />
                <span className='check-label'>{label || children}</span>
            </label>
        )
    }

}
