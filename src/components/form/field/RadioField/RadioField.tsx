import React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { RadioButton, RadioButtonProps } from '../../input/RadioButton/RadioButton'

export interface RadioFieldProps extends BaseFieldProps<RadioButtonProps> {
}

export class RadioField extends React.Component<RadioFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                type='radio'
                hasWrapper={false}
                render={this.renderRadio}
            />
        )
    }

    private renderRadio = (props: RenderProps) => (
        <RadioButton
            {...extractInputProps(this.props)}
            {...props.input}
            label={this.props.label}
        />
    )

}
