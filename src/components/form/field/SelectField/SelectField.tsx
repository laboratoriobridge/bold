import * as React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { DefaultItemType, Select, SelectProps } from '../../input/Select'

export interface SelectFieldProps<OptionType = DefaultItemType> extends BaseFieldProps<SelectProps<OptionType>> {
}

export class SelectField<OptionType = DefaultItemType> extends React.Component<SelectFieldProps<OptionType>> {

    static defaultProps: Partial<SelectFieldProps<any>> = {}

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <Select
                {...extractInputProps(this.props)}
                {...props.input}
                status={props.hasError ? 'error' : undefined}
            />
        )
    }

}
