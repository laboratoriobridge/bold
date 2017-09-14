import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { PasswordInputProps, PasswordInput } from '../../components/input/PasswordInput'
import field, { FieldProps } from '../hoc/field'

export interface PasswordFieldProps extends PasswordInputProps, Partial<WrappedFieldProps<any>> {
}


class PasswordFieldCmp extends React.Component<PasswordFieldProps> {

    render() {
        return (
            <PasswordInput {...this.props.input} placeholder={this.props.placeholder} />
        )
    }

}

export const PasswordField: React.ComponentClass<FieldProps & PasswordFieldProps> = field()(PasswordFieldCmp)
