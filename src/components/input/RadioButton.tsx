import * as React from 'react'
import * as classnames from 'classnames'
import { PublicInputProps, Input } from './Input'

export interface RadioButtonProps extends PublicInputProps {
    label: string
}

export class RadioButton extends React.Component<RadioButtonProps, any> {

    render() {
        const classes = classnames('radio', {
            'disabled': this.props.disabled
        })
        return (
            <span className='radio-wrapper'>
                <label className={classes}>
                    <Input
                        name={this.props.name}
                        disabled={this.props.disabled}
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                        value={this.props.value}
                        type='radio' />
                    <span className='radio-indicator'></span>
                    <span className='radio-label'>{this.props.label}</span>
                </label>
            </span>
        )
    }

}
