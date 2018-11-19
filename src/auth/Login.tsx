import * as React from 'react'
import { FormRenderProps } from 'react-final-form'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import { Form } from '../components/form/finalForm/Form'

import { AuthConfig } from './api/Auth'
import { actions, AuthState } from './module/auth'

export interface LoginComponentProps extends LoginProps, RouteComponentProps<any> {
    authState: AuthState<any>
    checkLogin(): Promise<any>
    login(form: any): Promise<any>
    logout(): any
}

class LoginComponent extends React.Component<LoginComponentProps> {

    componentWillMount() {
        this.props.checkLogin()
    }

    componentDidMount() {
        window.addEventListener('storage', this.storageListener, false)
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this.storageListener, false)
    }

    render() {
        if (this.props.authState.user) {
            return this.props.renderHome(this.props.authState)
        }
        return (
            <Form
                onSubmit={this.props.login}
                onSubmitSucceeded={this.props.onLogin}
                render={this.renderForm}
            />
        )
    }

    private renderForm = (props: FormRenderProps) =>
        this.props.renderForm(props, {
            userFieldName: 'username', passwordFieldName: 'password',
        }, this.props.authState)

    private storageListener = (event: any) => {
        if (event.key === 'login') {
            this.props.checkLogin()
        } else if (event.key === 'logout') {
            this.props.logout()
        }
    }

}

export interface OwnProps {
    config?: AuthConfig
}

const mapStateToProps = (state: any) => ({
    authState: state.auth,
})

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) => ({
    checkLogin: (form: any) => dispatch(actions.checkLogin(ownProps.config)),
    login: (form: any) => dispatch(actions.login(form.username, form.password, ownProps.config)),
    logout: () => dispatch(actions.logoutSuccess()),
})

export interface FormConfig {
    userFieldName: string
    passwordFieldName: string
}

export interface LoginProps {
    onLogin?(): void
    renderHome(state: AuthState<any>): React.ReactNode
    renderForm(props: FormRenderProps, config: FormConfig, state: AuthState<any>): React.ReactNode
}

export const Login = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
)
