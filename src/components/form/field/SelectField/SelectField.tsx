import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { Field } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
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

    private renderSelect = (props: FieldRenderProps) => (
        <Select
            {...this.props}
            {...props.input}
            status={props.meta.touched && props.meta.error && 'error'}
        />
    )

}
