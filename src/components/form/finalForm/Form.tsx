import { FORM_ERROR } from 'final-form'
import * as React from 'react'
import {
    Form as FinalForm,
    FormProps as FinalFormProps, FormRenderProps, FormSpy, FormSpyRenderProps
} from 'react-final-form'
import { Prompt } from 'react-router-dom'

import { AlertModalError, AlertModalSuccess } from '../../elements/modal/AlertModal'

export interface FormModalProps {
    active?: boolean
    icon?: string
    onClose: () => void
    title?: string
}

export interface ErrorModalProps extends FormModalProps {
    error?: any
}

export interface FormState {
    error: any
    modalErrorActive: boolean
    modalSuccessActive: boolean
}

export interface FormProps extends FinalFormProps {
    errorIcon?: string,
    errorModal?: React.SFC<ErrorModalProps> | React.ComponentClass<ErrorModalProps>,
    hasErrorModal?: boolean,
    hasLeaveModal?: boolean,
    hasSuccessModal?: boolean,
    successContent?: JSX.Element,
    successIcon?: string,
    successModal?: React.SFC<FormModalProps> | React.ComponentClass<FormModalProps>,
    successTitle?: string
    onSubmitSucceeded?(): void
    onSubmitFailed?(erros: object): void
}

export class Form extends React.Component<FormProps, FormState> {

    static defaultProps: Partial<FormProps> = {
        errorIcon: 'modal-erro',
        errorModal: AlertModalError,
        hasErrorModal: true,
        hasLeaveModal: true,
        hasSuccessModal: true,
        successContent: (<span>Os dados foram salvos corretamente.</span>),
        successIcon: 'modal-sucesso',
        successModal: AlertModalSuccess,
        successTitle: 'Cadastro realizado com sucesso!',
    }

    constructor(props: FormProps, context) {
        super(props, context)
        this.state = {
            error: undefined,
            modalErrorActive: false,
            modalSuccessActive: false,
        }
    }

    render() {
        const {
            errorIcon,
            errorModal: ErrorModal,
            successContent,
            successIcon,
            successModal: SuccessModal,
            successTitle,
        } = this.props

        let errorTitle
        let errorContent

        if (this.state.error && !this.state.error._error) {
            errorTitle = 'Preenchimento incorreto!'
            errorContent = (<span>Alguns dados podem ter sido preenchidos incorretamente.</span>)
        } else {
            errorTitle = 'Erro inesperado!'
            errorContent = (<span>Erro inesperado na aplicação.</span>)
        }

        return (
            <>
                <FinalForm
                    {...this.props}
                    onSubmit={this.onSubmit}
                    render={this.renderForm}
                />
                <ErrorModal
                    active={this.state.modalErrorActive}
                    error={this.state.error}
                    onClose={this.closeError}
                    icon={errorIcon}
                    title={errorTitle}
                >
                    {errorContent}
                </ErrorModal>
                <SuccessModal
                    active={this.state.modalSuccessActive}
                    onClose={this.closeSuccess}
                    icon={successIcon}
                    title={successTitle}
                >
                    {successContent}
                </SuccessModal>
            </>
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
        if (this.props.hasErrorModal) {
            this.setState({ error: errors, modalErrorActive: true })
        } else {
            this.props.onSubmitFailed && this.props.onSubmitFailed(errors)
        }
    }

    private onSubmitSucceeded = () => {
        if (this.props.hasSuccessModal) {
            this.setState({ modalSuccessActive: true })
        } else {
            this.props.onSubmitSucceeded && this.props.onSubmitSucceeded()
        }
    }

    private closeError = () => {
        this.props.onSubmitFailed && this.props.onSubmitFailed(this.state.error)
        this.setState({ modalErrorActive: false, error: undefined })
    }

    private closeSuccess = () => {
        this.props.onSubmitSucceeded && this.props.onSubmitSucceeded()
        this.setState({ modalSuccessActive: false })
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
