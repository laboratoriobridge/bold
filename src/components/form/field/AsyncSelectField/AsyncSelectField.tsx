import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
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

    private renderSelect = (props: RenderProps) => (
        <AsyncSelect
            {...this.props}
            {...props.input}
            status={props.hasError && 'error'}
        />
    )

}
