import { FORM_ERROR } from 'final-form'
import * as React from 'react'
import { Form as FinalForm, FormProps as FinalFormProps, FormRenderProps } from 'react-final-form'
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
    onSubmitSuccess?(): void
    onSubmitFail?(erros: object): void
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
            <div className='is-full-height is-vertical-flow'>
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
            </div>
        )
    }

    private renderForm = (props: FormRenderProps) => (
        <div className='is-full-height is-vertical-flow'>
            <Prompt
                when={this.props.hasLeaveModal && !props.pristine && !props.submitSucceeded}
                message='mensagem não usada'
            />
            {this.props.render(props)}
        </div>
    )

    private onSubmit = (values, form) => {
        const result = this.props.onSubmit(values, form)

        if (result) {
            if (this.isPromise(result)) {
                return result.then(() => this.onSubmitSuccess())
                    .catch(error => {
                        let errors
                        if (error.response.status === 400) {
                            errors = error.response.data
                        } else {
                            errors = { [FORM_ERROR]: error.response.data }
                        }

                        return Promise.resolve(errors).then(() => this.onSubmitFail(errors))
                    })
            } else {
                this.onSubmitFail(result)
                return result
            }
        } else {
            this.onSubmitSuccess()
        }
    }

    private onSubmitFail = (errors) => {
        if (this.props.hasErrorModal) {
            this.setState({ error: errors, modalErrorActive: true })
        } else {
            this.props.onSubmitFail && this.props.onSubmitFail(errors)
        }
    }

    private onSubmitSuccess = () => {
        if (this.props.hasSuccessModal) {
            this.setState({ modalSuccessActive: true })
        } else {
            this.props.onSubmitSuccess && this.props.onSubmitSuccess()
        }
    }

    private closeError = () => {
        this.props.onSubmitFail && this.props.onSubmitFail(this.state.error)
        this.setState({ modalErrorActive: false, error: undefined })
    }

    private closeSuccess = () => {
        this.props.onSubmitSuccess && this.props.onSubmitSuccess()
        this.setState({ modalSuccessActive: false })
    }

    private isPromise = (arg: any): arg is Promise<any> => {
        return arg.catch !== undefined
    }

}
