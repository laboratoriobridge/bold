import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { MultiSelect, MultiSelectProps } from '../../select/MultiSelect/MultiSelect'

export interface MultiSelectFieldProps extends FormFieldProps, MultiSelectProps {
    name: string
}

export class MultiSelectField extends React.Component<MultiSelectFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: RenderProps) => (
        <MultiSelect
            {...this.props}
            {...props.input}
        />
    )

}
