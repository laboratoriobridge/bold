import * as React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

import { FormError } from '../FormError'

export interface ErrorFieldProps {
    name: string
}

export class ErrorField extends React.Component<ErrorFieldProps> {
    render() {
        return (
            <Field name={this.props.name} render={this.renderField} />
        )
    }

    renderField = (renderProps: FieldRenderProps) => {
        const {
            meta: {
                touched,
                error,
                dirtySinceLastSubmit,
                submitError,
            },
        } = renderProps

        const hasError = (!!error && touched) || (!!submitError && !dirtySinceLastSubmit)

        if (hasError) {
            return <FormError error={error || submitError} />
        }

        return null
    }
}
