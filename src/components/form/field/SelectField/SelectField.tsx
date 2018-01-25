import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

import { FormFieldProps } from '../../FormField'
import { Field } from '../../reduxForm/Field'
import { Select, SelectProps } from '../../select/Select/Select'

export interface SelectFieldProps extends FormFieldProps, SelectProps {
    name: string
}

export class SelectField extends React.Component<SelectFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: WrappedFieldProps) => (
        <Select
            {...this.props}
            {...props.input}
            status={props.meta.touched && props.meta.error && 'error'}
        />
    )

}
