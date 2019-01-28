import { FormState } from 'final-form'
import * as React from 'react'
import { FormSpy } from 'react-final-form'

export interface FormSubmissionListenerProps {
    onSubmitSucceeded?(props: FormState): void
    onSubmitFailed?(props: FormState): void
}

export const FormSubmissionListener = (props: FormSubmissionListenerProps) => {
    const handleChange = (formState: FormState) => {
        const { onSubmitFailed, onSubmitSucceeded } = props

        if (onSubmitSucceeded && formState.submitSucceeded) {
            setTimeout(() => onSubmitSucceeded(formState))
        }

        if (onSubmitFailed && formState.submitFailed) {
            setTimeout(() => onSubmitFailed(formState))
        }
    }

    return (
        <FormSpy
            subscription={{
                submitFailed: true,
                submitSucceeded: true,
                submitErrors: true,
                hasSubmitErrors: true,
            }}
            onChange={handleChange}
        />
    )
}
