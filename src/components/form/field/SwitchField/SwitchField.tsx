import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { Switch, SwitchProps } from '../../input/Switch/Switch'

export interface SwitchFieldProps extends SwitchProps {
    name: string
}

export class SwitchField extends React.Component<SwitchFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                type='checkbox'
                hasWrapper={false}
                render={this.renderSwitch}
            />
        )
    }

    private renderSwitch = (props: RenderProps) => (
        <Switch
            {...this.props}
            {...props.input}
        />
    )

}
