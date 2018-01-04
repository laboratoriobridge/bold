import * as React from 'react'
import { Checkbox, CheckboxProps } from '../../input/Checkbox/Checkbox'
import { Field } from '../../reduxForm/Field'
import { WrappedFieldProps } from 'redux-form'

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

    private renderCheck = (props: WrappedFieldProps) => (
        <Checkbox
            {...this.props}
            {...props.input}
        />
    )

    private normalize = (value) => !!value

}
