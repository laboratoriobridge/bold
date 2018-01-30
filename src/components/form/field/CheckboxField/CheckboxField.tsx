import * as React from 'react'
import { FieldRenderProps } from 'react-final-form'

import { Field } from '../../finalForm/Field'
import { Checkbox, CheckboxProps } from '../../input/Checkbox/Checkbox'

export interface CheckboxFieldProps extends CheckboxProps {
    name: string
}

export class CheckboxField extends React.Component<CheckboxFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                type='checkbox'
                hasWrapper={false}
                // normalize resolve a issue: https://github.com/erikras/redux-form/issues/2922
                normalize={this.normalize}
                render={this.renderCheck}
            />
        )
    }

    private renderCheck = (props: FieldRenderProps) => (
        <Checkbox
            {...this.props}
            {...props.input}
        />
    )

    private normalize = (value) => !!value

}
