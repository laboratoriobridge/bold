import { FORM_ERROR } from 'final-form'
import * as React from 'react'
import {
    Form as FinalForm,
    FormProps as FinalFormProps, FormRenderProps, FormSpy, FormSpyRenderProps
} from 'react-final-form'
import { Prompt } from 'react-router-dom'

export interface FormProps extends FinalFormProps {
    hasLeaveModal?: boolean
    onSubmitSucceeded?(): void
    onSubmitFailed?(erros: object): void
}

export class Form extends React.Component<FormProps> {

    static defaultProps: Partial<FormProps> = {
        hasLeaveModal: true,
    }

    render() {
        return (
            <FinalForm
                {...this.props}
                onSubmit={this.onSubmit}
                render={this.renderForm}
            />
        )
    }

    private renderForm = (props: FormRenderProps) => (
        <>
            <FormSpy
                subscription={{ pristine: true, submitErrors: true, submitFailed: true, submitSucceeded: true }}
            >
                {spyProps => (
                    <FormListener
                        {...spyProps}
                        hasLeaveModal={this.props.hasLeaveModal}
                        onSubmitSucceeded={this.onSubmitSucceeded}
                        onSubmitFailed={this.onSubmitFailed}
                    />
                )}
            </FormSpy>
            {this.props.render(props)}
        </>
    )

    private onSubmit = (values, form) => {
        const result = this.props.onSubmit(values, form)

        if (result) {
            if (this.isPromise(result)) {
                return result.then(() => Promise.resolve())
                    .catch(error => {
                        let errors
                        if (error.response.status === 400) {
                            errors = error.response.data
                        } else {
                            errors = { [FORM_ERROR]: error.response.data }
                        }

                        return Promise.resolve(errors)
                    })
            } else {
                return result
            }
        }
    }

    private onSubmitFailed = (errors) => {
        this.props.onSubmitFailed && this.props.onSubmitFailed(errors)
    }

    private onSubmitSucceeded = () => {
        this.props.onSubmitSucceeded && this.props.onSubmitSucceeded()
    }

    private isPromise = (arg: any): arg is Promise<any> => {
        return arg.catch !== undefined
    }

}

interface FormListenerProps extends FormSpyRenderProps {
    hasLeaveModal: boolean,
    onSubmitSucceeded(): void
    onSubmitFailed(erros: object): void
}

class FormListener extends React.PureComponent<FormListenerProps> {

    componentDidUpdate(prevProps, prevState, prevContext) {
        !prevProps.submitSucceeded && this.props.submitSucceeded &&
            setTimeout(() => this.props.onSubmitSucceeded())
        !prevProps.submitFailed && this.props.submitFailed &&
            setTimeout(() => this.props.onSubmitFailed(this.props.submitErrors))
    }

    render() {
        return (
            <Prompt
                when={this.props.hasLeaveModal && !this.props.pristine && !this.props.submitSucceeded}
                message='mensagem não usada'
            />
        )
    }

}
