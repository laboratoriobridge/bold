import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'

import { ThemeProvider } from '../styles/theme/ThemeProvider'
import ThemeDefinition from '../styles/theme/ThemeDefinition'
import defaultTheme from '../styles/theme/default/defaultTheme'

const reducer = (state, action) => {
    return state
}

export const createTestStore = (initialState = {}) => {
    return createStore(reducer, initialState)
}

export const withTheme = (node: React.ReactElement<any>, theme: ThemeDefinition = defaultTheme) => {
    return (
        <ThemeProvider themeDef={theme}>
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
        form: formName
    })(FormWrapper)

    return withRedux(withTheme(<TestForm />))
}
