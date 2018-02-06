import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { RadioButton, RadioButtonProps } from '../../input/RadioButton/RadioButton'

export interface RadioFieldProps extends RadioButtonProps {
    name: string
}

export class RadioField extends React.Component<RadioFieldProps, any> {

    render() {
        return (
            <Field
                {...this.props}
                hasWrapper={false}
                render={this.renderRadio}
            />
        )
    }

    private renderRadio = (props: RenderProps) => (
        <RadioButton
            {...this.props}
            {...props.input}
        />
    )

}
