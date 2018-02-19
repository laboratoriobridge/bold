import axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'
import * as React from 'react'
import { Form, FormSpy } from 'react-final-form'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
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

/**
 * Envelopa o componente com o <ThemeProvider> do emotion.
 * Utilizado para testes de componentes que necessitam acesso ao contexto de styles.
 *
 * @param node Componente a ser "envelopado"
 * @param theme Tema a ser utilizado.
 */
export const withTheme = (node: React.ReactElement<any>, theme: Theme = defaultTheme) => {
    return (
        <ThemeProvider theme={theme}>
            {node}
        </ThemeProvider>
    )
}

/**
 * Envelopa o componente com o <Provider> do react-redux.
 * Utilizado para testes de componentes que necessitam de store.
 *
 * @param node Componente a ser "envelopado"
 */
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
 * @param node Componente a ser "envelopado"
 */
export const withForm = (node: React.ReactNode) => {
    const onSubmit = () => undefined
    const render = () => node
    return withTheme(<Form render={render} onSubmit={onSubmit} />)
}

/**
 * Envelopa o componente com o MemoryRouter do react-router-dom.
 * Utilizado para testes de componentes que necessitam do <Router>.
 *
 * @param node Componente a ser "envelopado"
 */
export const withRouter = (node: React.ReactNode) => {
    return (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            {node}
        </MemoryRouter>
    )
}
