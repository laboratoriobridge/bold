import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { shallow, ShallowWrapper } from 'enzyme'
import { reduxForm, reducer as reduxFormReducer } from 'redux-form/immutable'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

// mock data atual
Date.now = jest.fn(() => new Date(2017, 7, 9).valueOf())

export const matchSnapshot = (renderedComponent) => {
    const tree = renderedComponent.toJSON()
    expect(tree).toMatchSnapshot()
    return tree
}

export const renderAndMatchSnapshot = (componentJsx) => {
    const renderedComponent = Renderer.create(componentJsx)
    matchSnapshot(renderedComponent)
    return renderedComponent
}

export function shallowRenderAndMatch<P>(componentJsx: React.ReactElement<P>): ShallowWrapper<P, any> {
    const wrapper = shallow(componentJsx)
    expect(wrapper).toMatchSnapshot()
    return wrapper
}

export const shallowMatch = (wrapper) => {
    expect(wrapper).toMatchSnapshot()
}

const reducer = combineReducers({
    form: reduxFormReducer,
})

export const createTestStore = () => {
    return createStore(
        reducer
    )
}

/**
 * Envelopa o componente com o wrapper do redux-form e com o Provider, disponibilizando o `testStore`.
 * Utilizado para testes de fields do redux-form.
 *
 * @param {*} component Componente a ser "envelopado"
 * @param {string} formName Nome do form.
 * @param {Store} store Store a ser utilizado pelo form.
 */
export const testForm = (component: React.ComponentClass<any> | React.StatelessComponent<any>, formName = 'test', store = createTestStore()) => {
    const TestForm = reduxForm({
        form: formName
    })(component)

    return (
        <Provider store={store} >
            <TestForm />
        </Provider>
    )
}
