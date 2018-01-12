import axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'
import httpAdapter from 'axios/lib/adapters/http'
import * as React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import requesterReducer from '../store/requester'
import { defaultTheme, Theme, ThemeProvider } from '../styles/'

export const axiosMock = new MockAdapter(axios)

const reducer = combineReducers({
    requester: requesterReducer,
})

const middlewares = [thunkMiddleware]

export const createTestStore = (initialState = {}) => {
    return createStore(reducer, initialState, compose(applyMiddleware(...middlewares)))
}

export const mockStore = configureMockStore(middlewares)

export const withTheme = (node: React.ReactElement<any>, theme: Theme = defaultTheme) => {
    return (
        <ThemeProvider theme={theme}>
            {node}
        </ThemeProvider>
    )
}

export const withRedux = (node: React.ReactElement<any>, store = createTestStore()) => {
    return (
        <Provider store={store}>
            {node}
        </Provider>
    )
}

/**
 * Envelopa o componente com o wrapper Provider do redux, o ThemeProvider e o wrapper do redux-form.
 * Utilizado para testes de fields do redux-form.
 *
 * @param {*} component Componente a ser "envelopado"
 * @param {string} formName Nome do form.
 * @param {Store} store Store a ser utilizado pelo form.
 */
export const withForm = (node: React.ReactElement<any>, formName = 'test', store = createTestStore()) => {
    class FormWrapper extends React.Component<InjectedFormProps, any> {
        render() { return node }
    }

    const TestForm = reduxForm({
        form: formName,
    })(FormWrapper)

    return withRedux(withTheme(<TestForm />))
}
