import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

import { FormFieldProps } from '../../FormField'
import { Field } from '../../reduxForm/Field'
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

    private renderSelect = (props: WrappedFieldProps) => (
        <AsyncSelect
            {...this.props}
            {...props.input}
            status={props.meta.touched && props.meta.error && 'error'}
        />
    )

}
