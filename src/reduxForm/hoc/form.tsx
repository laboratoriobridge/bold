import * as React from 'react'
import { Prompt } from 'react-router-dom'
import { Config as ReduxFormConfig, FormProps } from 'redux-form'
import { reduxForm, SubmissionError } from 'redux-form/immutable'
import ui, { ReduxUIProps } from 'redux-ui'
import { AlertModalError, AlertModalSuccess } from '../../components/elements/modal/AlertModal'

export interface FormModalProps {
    active?: boolean
    icon?: string
    onClose: () => void
    title?: string
}

export interface ErrorModalProps extends FormModalProps {
    error?: any
}

export interface SuccessModalProps extends FormModalProps {
    result?: any
}

export type FormConfig<FormData, State, Props> = ReduxFormConfig<FormData, State, Props> & {
    errorIcon?: string,
    errorModal?: React.SFC<ErrorModalProps> | React.ComponentClass<ErrorModalProps>,
    hasErrorModal?: boolean,
    hasLeaveModal?: boolean,
    hasSuccessModal?: boolean,
    successContent?: JSX.Element,
    successIcon?: string,
    successModal?: React.SFC<SuccessModalProps> | React.ComponentClass<SuccessModalProps>,
    successTitle?: string
}


const defaultConfig: FormConfig<any, any, any> = {
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

type ExternalFormProps = {
    onSubmit: any
    onSubmitSuccess: any
    onSubmitFail: any
}
type UIStateShape = {
    error: any
    modalErrorActive: boolean
    modalSuccessActive: boolean
    result: any
}

export default function form<FormData, State, Props>(userConfig: FormConfig<FormData, State, Props>) {
    return <WrapperComponentsProps extends object>(WrappedComponent: React.SFC<WrapperComponentsProps> | React.ComponentClass<WrapperComponentsProps>) => {
        const resultConfig: FormConfig<FormData, State, Props> = (Object as any).assign({}, defaultConfig, userConfig)

        const {
            errorIcon,
            errorModal: ErrorModal,
            hasErrorModal,
            hasLeaveModal,
            hasSuccessModal,
            successContent,
            successIcon,
            successModal: SuccessModal,
            successTitle,
            ...reduxFormConfig } = resultConfig

        const WrappedForm = reduxForm(reduxFormConfig)(class extends React.Component<FormProps<FormData, State, Props> & WrapperComponentsProps> {

            render() {
                const { pristine, submitSucceeded } = this.props

                return (
                    <div className='is-full-height is-vertical-flow'>
                        <Prompt when={hasLeaveModal && !pristine && !submitSucceeded} message='mensagem não usada' />
                        <WrappedComponent {...this.props} />
                    </div>
                )
            }

        })

        return ui({
            state: {
                error: undefined,
                modalErrorActive: false,
                modalSuccessActive: false,
                result: undefined,
            }
        })(class extends React.Component<ReduxUIProps<UIStateShape> & ExternalFormProps & WrapperComponentsProps> {

            constructor() {
                super()

                this.closeError = this.closeError.bind(this)
                this.closeSuccess = this.closeSuccess.bind(this)
                this.onSubmit = this.onSubmit.bind(this)
                this.onSubmitFail = this.onSubmitFail.bind(this)
                this.onSubmitSuccess = this.onSubmitSuccess.bind(this)
            }

            onSubmit(e) {
                const promise = this.props.onSubmit(e)

                if (promise && promise.catch) {
                    return promise.catch(error => {
                        if (error.response.status === 400) {
                            throw new SubmissionError(error.response.data)
                        } else {
                            throw new SubmissionError({ _error: error.response.data })
                        }
                    })
                } else {
                    return promise
                }

            }

            onSubmitFail(error) {
                if (hasErrorModal) {
                    this.props.updateUI('error', error)
                    this.props.updateUI('modalErrorActive', true)
                } else {
                    this.props.onSubmitFail && this.props.onSubmitFail(error)
                }
            }

            onSubmitSuccess(result) {
                if (hasSuccessModal) {
                    this.props.updateUI('result', result)
                    this.props.updateUI('modalSuccessActive', true)
                } else {
                    this.props.onSubmitSuccess && this.props.onSubmitSuccess(result)
                }
            }

            closeError() {
                this.props.updateUI('modalErrorActive', false)
                this.props.onSubmitFail && this.props.onSubmitFail(this.props.ui.error)
                this.props.updateUI('error', undefined)
            }

            closeSuccess() {
                this.props.updateUI('modalSuccessActive', false)
                this.props.onSubmitSuccess && this.props.onSubmitSuccess(this.props.ui.result)
                this.props.updateUI('result', undefined)
            }

            render() {
                const { onSubmit, onSubmitFail, onSubmitSuccess, ...rest } = this.props as any

                let errorTitle
                let errorContent

                if (this.props.ui.error && !this.props.ui.error._error) {
                    errorTitle = 'Preenchimento incorreto!'
                    errorContent = (<span>Alguns dados podem ter sido preenchidos incorretamente.</span>)
                } else {
                    errorTitle = 'Erro inesperado!'
                    errorContent = (<span>Erro inesperado na aplicação.</span>)
                }


                return (
                    <div className='is-full-height is-vertical-flow'>
                        <WrappedForm {...rest} onSubmit={this.onSubmit} onSubmitFail={this.onSubmitFail} onSubmitSuccess={this.onSubmitSuccess} />
                        <ErrorModal
                            active={this.props.ui.modalErrorActive}
                            error={this.props.ui.error}
                            onClose={this.closeError}
                            icon={errorIcon}
                            title={errorTitle}
                        >
                            {errorContent}
                        </ErrorModal>
                        <SuccessModal
                            active={this.props.ui.modalSuccessActive}
                            onClose={this.closeSuccess}
                            icon={successIcon}
                            result={this.props.ui.result}
                            title={successTitle}
                        >
                            {successContent}
                        </SuccessModal>
                    </div>
                )
            }
        })
    }
}
