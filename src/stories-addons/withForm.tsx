import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer as reduxFormReducer, reduxForm } from 'redux-form'

const reducer = combineReducers({
    form: reduxFormReducer,
})

export const createStoryStore = () => {
    return createStore(
        reducer
    )
}

export const withForm = (form = 'storyForm', store = createStoryStore()) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        const StoryForm = reduxForm({
            form,
        })(() => <form>{story()}</form>)

        return (
            <Provider store={store} >
                <StoryForm />
            </Provider>
        )
    }
