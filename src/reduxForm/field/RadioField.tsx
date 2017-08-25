import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'
import { RadioButtonProps, RadioButton } from '../../components/input/RadioButton'
import field, { FieldProps } from '../hoc/field'

export interface RadioFieldProps extends RadioButtonProps, Partial<WrappedFieldProps<any>> {

}

class RadioFieldComponent extends React.Component<RadioFieldProps, any> {

    render() {
        return (
            <RadioButton {...this.props.input} label={this.props.label} disabled={this.props.disabled} />
        )
    }

}

export const RadioField: React.ComponentClass<FieldProps & RadioFieldProps> = field({ type: 'radio', hasWrapper: false })(RadioFieldComponent)
