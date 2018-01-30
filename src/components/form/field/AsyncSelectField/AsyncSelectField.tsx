import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { Field } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { AsyncSelect, AsyncSelectProps } from '../../select/AsyncSelect/AsyncSelect'

export interface AsyncSelectFieldProps extends FormFieldProps, AsyncSelectProps {
    name: string
}

export class AsyncSelectField extends React.Component<AsyncSelectFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: FieldRenderProps) => (
        <AsyncSelect
            {...this.props}
            {...props.input}
            status={props.meta.touched && props.meta.error && 'error'}
        />
    )

}
