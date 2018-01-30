import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { Field } from '../../finalForm/Field'
import { RadioButton, RadioButtonProps } from '../../input/RadioButton/RadioButton'

export interface RadioFieldProps extends RadioButtonProps {
    name: string
}

export class RadioField extends React.Component<RadioFieldProps, any> {

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

    private renderRadio = (props: FieldRenderProps) => (
        <RadioButton
            {...this.props}
            {...props.input}
        />
    )

}
