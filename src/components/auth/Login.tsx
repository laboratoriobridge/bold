import * as React from 'react'
import { FormRenderProps } from 'react-final-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { Form } from '../form/finalForm/Form'

import { AuthConfig } from './api/Auth'
import { actions } from './module/auth'

interface LoginComponentProps extends LoginProps {
    user: any
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
        if (this.props.user) {
            return this.props.renderHome({})
        }
        return (
            <Form
                hasSuccessModal={false}
                onSubmit={this.props.login}
                onSubmitSucceeded={this.props.onLogin}
                render={this.renderForm}
            />
        )
    }

    private renderForm = (props: FormRenderProps) => this.props.renderForm(props, 'username', 'password')

    private storageListener = (event: any) => {
        if (event.key === 'login') {
            this.props.checkLogin()
        } else if (event.key === 'logout') {
            this.props.logout()
        }
    }

}

interface OwnProps {
    config?: AuthConfig
}

const mapStateToProps = (state: any) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch: any, ownProps: OwnProps) => ({
    checkLogin: (form: any) => dispatch(actions.checkLogin(ownProps.config)),
    login: (form: any) => dispatch(actions.login(form.username, form.password, ownProps.config)),
    logout: () => dispatch(actions.logoutSuccess()),
})

export interface LoginProps {
    config?: AuthConfig
    renderHome(props: any): React.ReactNode
    onLogin?(): void
    renderForm(props: FormRenderProps, userFieldName: string, passwordFieldName: string): React.ReactNode
}

export const Login: React.ComponentClass<LoginProps> = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
)
