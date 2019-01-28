import * as React from 'react'
import { FormSpy, FormSpyRenderProps } from 'react-final-form'
import { Prompt } from 'react-router'

export interface FormListenerProps {
    hasLeaveModal?: boolean
    onSubmitSucceeded?(props: FormSpyRenderProps): void
    onSubmitFailed?(props: FormSpyRenderProps): void
}

export class FormInnerListener extends React.Component<FormListenerProps & FormSpyRenderProps> {

    componentDidUpdate = () => {
        const { hasLeaveModal, onSubmitFailed, onSubmitSucceeded, ...spyProps } = this.props
        if (onSubmitSucceeded && this.props.submitSucceeded) {
            setTimeout(() => onSubmitSucceeded(spyProps))
        }

        if (onSubmitFailed && this.props.submitFailed) {
            setTimeout(() => onSubmitFailed(spyProps))
        }
    }

    render() {
        return (
            <Prompt
                when={this.props.hasLeaveModal && !this.props.pristine && !this.props.submitSucceeded}
                message='Deseja sair e perder as informações não salvas?'
            />
        )
    }

}

export const FormListener = (props: FormListenerProps) => {
    return (
        <FormSpy
            subscription={{
                pristine: true, submitErrors: true, errors: true, submitFailed: true, submitSucceeded: true,
            }}
        >
            {spyProps => <FormInnerListener {...props} {...spyProps} />}
        </FormSpy>
    )
}
