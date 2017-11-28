import * as React from 'react'
import { PasswordInputProps, PasswordInput } from '../../components/input/PasswordInput'
import { Field } from '../Field'

export interface PasswordFieldProps extends PasswordInputProps {
    name: string
}


export class PasswordField extends React.Component<PasswordFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={props =>
                    <PasswordInput
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
