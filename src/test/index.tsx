import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { createMemoryHistory, MemoryHistory } from 'history'
import * as React from 'react'
import { Form } from 'react-final-form'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { requesterReducer } from '../requester'
import { createTheme, Theme, ThemeProvider } from '../styles/'

export const axiosMock = new MockAdapter(axios)

const defaultReducers = combineReducers({
    requester: requesterReducer,
})

const middlewares: Middleware[] = [thunkMiddleware]

export const createTestStore = (initialState = {}, reducers: any = defaultReducers) => {
    return createStore<{}, any, any, {}>(reducers, initialState, compose(applyMiddleware(...middlewares)))
}

export const mockStore = configureMockStore<any, any>(middlewares)

/**
 * Wraps the component with emotion's <ThemeProvider>.
 *
 * @param node Component to be wrapped
 * @param theme Theme to be injected by provider.
 */
export const withTheme = (node: React.ReactElement<any>, theme: Theme = createTheme()) => {
    return (
        <ThemeProvider theme={theme}>
            {node}
        </ThemeProvider>
    )
}

/**
 * Wraps the component with react-redux's <Provider />
 *
 * @param node Component to be wrapped.
 */
export const withRedux = (node: React.ReactElement<any>, store = createTestStore()) => {
    return (
        <Provider store={store}>
            {node}
        </Provider>
    )
}

/**
 * Wraps the component with redux's <Provider />, <ThemeProvider /> and redux-form's <Form />
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
 * Wraps the component with react-router's <Router />.
 *
 * @param node Component to be wrapped.
 * @param history History to be used by the router. Uses history's `createMemoryHistory` as default
 */
export const withRouter = (node: React.ReactNode, history: MemoryHistory = createMemoryHistory()) => {
    return (
        <Router history={history}>
            {node}
        </Router>
    )
}
