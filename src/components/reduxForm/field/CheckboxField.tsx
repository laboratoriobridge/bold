import * as React from 'react'
import { Checkbox, CheckboxProps } from '../../input/Checkbox'
import { Field } from '../Field'

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
                normalize={v => !!v}
                render={props =>
                    <Checkbox
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }

}
