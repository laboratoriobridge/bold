import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { AsyncSelect, AsyncSelectProps } from '../../select/AsyncSelect/AsyncSelect'

export interface AsyncSelectFieldProps extends FormFieldProps, AsyncSelectProps {
    name: string
    convertToValueKey?: boolean
}

export class AsyncSelectField extends React.Component<AsyncSelectFieldProps> {

    static defaultProps: Partial<AsyncSelectFieldProps> = {
        valueKey: 'value',
        convertToValueKey: true,
    }

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
                convert={this.convert}
            />
        )
    }

    private convert = (value: any) => {
        return this.props.convertToValueKey ? value[this.props.valueKey] : value
    }

    private renderSelect = (props: RenderProps) => (
        <AsyncSelect
            {...this.props}
            {...props.input}
            status={props.hasError && 'error'}
        />
    )

}
