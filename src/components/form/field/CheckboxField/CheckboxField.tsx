import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
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
                render={this.renderCheck}
            />
        )
    }

    private renderCheck = (props: RenderProps) => (
        <Checkbox
            {...this.props}
            {...props.input}
        />
    )

}
