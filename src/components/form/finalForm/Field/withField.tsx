import hoistNonReactStatics = require('hoist-non-react-statics')
import * as React from 'react'

import { InputStatus } from '../../input/TextInput/TextInput'

import { Field, FieldProps, RenderProps } from './Field'
import { BaseFieldProps, extractInputProps } from './index'

export interface BaseInputProps {
    name?: string
    status?: InputStatus
}

export function withField<P extends BaseInputProps>(
    InputComponent: React.ComponentType<P>,
    fieldProps: Partial<FieldProps> = {}
) {
    const WithField = class extends React.Component<BaseFieldProps<P>> {
        static displayName = `Field(${InputComponent.displayName || InputComponent.name})`

        render() {
            return (
                <Field
                    {...this.props}
                    render={this.renderInput}
                    {...fieldProps}
                />
            )
        }

        renderInput = (props: RenderProps) => {
            return (
                <InputComponent
                    status={props.hasError ? 'error' : undefined}
                    {...extractInputProps(this.props)}
                    {...props.input}
                />
            )
        }
    }
    hoistNonReactStatics(WithField, InputComponent)
    return WithField
}
