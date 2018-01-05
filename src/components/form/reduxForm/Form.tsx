import * as React from 'react'
import { Prompt } from 'react-router-dom'
import {
    ConfigProps as ReduxFormConfigProps, DecoratedComponentClass, InjectedFormProps as InjectedFormProps
} from 'redux-form'
import { reduxForm, SubmissionError } from 'redux-form'
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

export interface SuccessModalProps extends FormModalProps {
    result?: any
}

export interface FormState {
    error: any
    modalErrorActive: boolean
    modalSuccessActive: boolean
    result: any
}

export interface FormProps extends ReduxFormConfigProps<any, any> {
    errorIcon?: string,
    errorModal?: React.SFC<ErrorModalProps> | React.ComponentClass<ErrorModalProps>,
    hasErrorModal?: boolean,
    hasLeaveModal?: boolean,
    hasSuccessModal?: boolean,
    successContent?: JSX.Element,
    successIcon?: string,
    successModal?: React.SFC<SuccessModalProps> | React.ComponentClass<SuccessModalProps>,
    successTitle?: string
    onSubmit: any
    onSubmitSuccess?: any
    onSubmitFail?: any
    render(props: FormComponentProps): JSX.Element
}

export interface FormComponentProps extends Partial<InjectedFormProps> {
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

    private ReduxWrappedForm: DecoratedComponentClass<any, WrapperFormProps>

    constructor(props: FormProps, context) {
        super(props, context)
        this.state = {
            error: undefined,
            modalErrorActive: false,
            modalSuccessActive: false,
            result: undefined,
        }
    }

    componentWillMount() {
        this.ReduxWrappedForm = reduxForm(this.props)(WrappedForm)
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
                <this.ReduxWrappedForm
                    onSubmit={this.onSubmit}
                    onSubmitFail={this.onSubmitFail}
                    onSubmitSuccess={this.onSubmitSuccess}
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
                    result={this.state.result}
                    title={successTitle}
                >
                    {successContent}
                </SuccessModal>
            </div>
        )
    }

    private renderForm = (props: FormComponentProps) => (
        <div className='is-full-height is-vertical-flow'>
            <Prompt
                when={this.props.hasLeaveModal && !props.pristine && !props.submitSucceeded}
                message='mensagem não usada'
            />
            {this.props.render(props)}
        </div>
    )

    private onSubmit = (values) => {
        const result = this.props.onSubmit(values)

        if (this.isPromise(result)) {
            return result.catch(error => {
                if (error.response.status === 400) {
                    throw new SubmissionError(error.response.data)
                } else {
                    throw new SubmissionError({ _error: error.response.data })
                }
            })
        } else {
            return result
        }

    }

    private onSubmitFail = (errors) => {
        if (this.props.hasErrorModal) {
            this.setState({ error: errors, modalErrorActive: true })
        } else {
            this.props.onSubmitFail && this.props.onSubmitFail(errors)
        }
    }

    private onSubmitSuccess = (result) => {
        if (this.props.hasSuccessModal) {
            this.setState({ result, modalSuccessActive: true })
        } else {
            this.props.onSubmitSuccess && this.props.onSubmitSuccess(result)
        }
    }

    private closeError = () => {
        this.props.onSubmitFail && this.props.onSubmitFail(this.state.error)
        this.setState({ modalErrorActive: false, error: undefined })
    }

    private closeSuccess = () => {
        this.props.onSubmitSuccess && this.props.onSubmitSuccess(this.state.result)
        this.setState({ modalSuccessActive: false, result: undefined })
    }

    private isPromise = (arg: any): arg is Promise<any> => {
        return arg.catch !== undefined
    }

}

interface WrapperFormProps extends Partial<InjectedFormProps<any, any>> {
    onSubmit: any
    onSubmitSuccess: any
    onSubmitFail: any
    render(props: FormComponentProps): JSX.Element
}

class WrappedForm extends React.Component<WrapperFormProps> {

    render() {
        return this.props.render(this.props) as any
    }

}
