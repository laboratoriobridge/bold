import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

import { FormError } from '../FormError'

export interface ErrorFieldProps {
    name: string
    ignoreObjectError?: boolean
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

        const ignore = this.props.ignoreObjectError
            && !(typeof error === 'string') && !(typeof submitError === 'string')

        if (hasError && !ignore) {
            return <FormError error={error || submitError} />
        }

        return null
    }
}
