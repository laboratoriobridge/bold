import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
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

    private renderSelect = (props: RenderProps) => (
        <Select
            {...this.props}
            {...props.input}
            status={props.hasError && 'error'}
        />
    )

}
