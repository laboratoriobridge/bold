import { AxiosPromise } from 'axios'

import Auth, { AuthConfig } from '../api/Auth'
export const LOGIN_REQUEST = 'bridge/auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'bridge/auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'bridge/auth/LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'bridge/auth/LOGOUT_SUCCESS'

export interface AuthState<T> extends Readonly<{
    error?: any
    user?: T
}> { }

export function reducer(state: AuthState<any> = {}, action: any): AuthState<any> {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, error: undefined, user: undefined }
        case LOGIN_SUCCESS:
            return { ...state, error: undefined, user: action.user }
        case LOGIN_FAILURE:
            return { ...state, error: action.error, user: undefined }
        case LOGOUT_SUCCESS:
            return { ...state, user: undefined }
        default:
            return state
    }
}

export const actions = {
    loginRequest: () => ({
        type: LOGIN_REQUEST,
    }),

    loginSuccess: (user: any) => ({
        type: LOGIN_SUCCESS,
        user,
    }),

    loginFailure: (error: any) => ({
        type: LOGIN_FAILURE,
        error,
    }),

    logoutSuccess: () => ({
        type: LOGOUT_SUCCESS,
    }),

    login: (username: string, password: string, config?: AuthConfig) => (dispatch: any): AxiosPromise<any> => {
        dispatch(actions.loginRequest())
        return Auth.login(username, password, config)
            .then(() => Auth.loadUserInfo(config))
            .then(result => {
                dispatch(actions.loginSuccess(result.data))
                window.localStorage && window.localStorage.setItem('login', Date.now().toString())
                return Promise.resolve(result)
            }).catch(error => {
                dispatch(actions.loginFailure(error.response.status))
                return Promise.reject(error)
            })
    },

    checkLogin: (config?: AuthConfig) => (dispatch: any, getState: () => any): AxiosPromise<any> | Promise<any> => {
        if (getState().auth.user) {
            return Promise.resolve()
        } else {
            dispatch(actions.loginRequest())
            return Auth.loadUserInfo(config)
                .then(result => {
                    dispatch(actions.loginSuccess(result.data))
                    return Promise.resolve(result)
                }).catch(error => {
                    dispatch(actions.loginFailure(error.response.status))
                    return Promise.reject(error)
                })
        }
    },

    updateLogin: (config?: AuthConfig) => (dispatch: any): AxiosPromise<any> => {
        dispatch(actions.loginRequest())
        return Auth.loadUserInfo(config)
            .then(result => {
                dispatch(actions.loginSuccess(result.data))
                return Promise.resolve(result)
            }).catch(error => {
                dispatch(actions.loginFailure(error.response.status))
                return Promise.reject(error)
            })
    },

    logout: (config?: AuthConfig) => (dispatch: any) => {
        dispatch(actions.logoutSuccess())
        Auth.logout(config)
    },
}
