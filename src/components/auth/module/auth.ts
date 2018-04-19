import { AxiosPromise } from 'axios'

import Auth, { AuthConfig } from '../api/Auth'

export const actionTypes = {
    LOGIN_REQUEST: 'bridge/auth/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'bridge/auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'bridge/auth/LOGIN_FAILURE',
    LOGOUT_SUCCESS: 'bridge/auth/LOGOUT_SUCCESS',
}

export interface AuthState<T> {
    readonly error?: any
    readonly user?: T
    readonly pending?: boolean
}

export function reducer(state: AuthState<any> = {}, action: any): AuthState<any> {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return { ...state, error: undefined, user: undefined, pending: true }
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, error: undefined, user: action.user, pending: false }
        case actionTypes.LOGIN_FAILURE:
            return { ...state, error: action.error, user: undefined, pending: false }
        case actionTypes.LOGOUT_SUCCESS:
            return { ...state, user: undefined }
        default:
            return state
    }
}

export const actions = {
    loginRequest: () => ({
        type: actionTypes.LOGIN_REQUEST,
    }),

    loginSuccess: (user: any) => ({
        type: actionTypes.LOGIN_SUCCESS,
        user,
    }),

    loginFailure: (error: any) => ({
        type: actionTypes.LOGIN_FAILURE,
        error,
    }),

    logoutSuccess: () => ({
        type: actionTypes.LOGOUT_SUCCESS,
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
        return Auth.logout(config).then(() => dispatch(actions.logoutSuccess()))
    },
}
