import * as React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { DefaultItemType } from '../../input/Select'
import { SelectMulti, SelectMultiProps } from '../../input/SelectMulti'

export interface SelectMultiFieldProps<T = DefaultItemType> extends BaseFieldProps<SelectMultiProps<T>> {
}

export class SelectMultiField<T = DefaultItemType> extends React.Component<SelectMultiFieldProps<T>> {

    static defaultProps: Partial<SelectMultiFieldProps<any>> = {}

    render() {
        return (
            <Field<T[]>
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <SelectMulti<T>
                {...extractInputProps(this.props)}
                {...props.input}
                status={props.hasError ? 'error' : undefined}
            />
        )
    }

}
