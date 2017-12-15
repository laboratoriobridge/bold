import * as React from 'react'
import { RadioButtonProps, RadioButton } from '../../../input/RadioButton'
import { Field } from '../../Field'
import { WrappedFieldProps } from 'redux-form'

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
