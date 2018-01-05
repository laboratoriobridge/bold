import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { RadioButton, RadioButtonProps } from '../../input/RadioButton/RadioButton'
import { Field } from '../../reduxForm/Field'

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

    private renderRadio = (props: WrappedFieldProps) => (
        <RadioButton
            {...this.props}
            {...props.input}
        />
    )

}
