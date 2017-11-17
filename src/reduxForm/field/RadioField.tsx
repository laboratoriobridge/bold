import * as React from 'react'
import { RadioButtonProps, RadioButton } from '../../components/input/RadioButton'
import { Field } from '../hoc/Field'

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
                render={props =>
                    <RadioButton
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
