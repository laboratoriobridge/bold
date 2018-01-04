import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'
import { reduxForm, reducer as reduxFormReducer } from 'redux-form/immutable'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    form: reduxFormReducer,
})

export const createStoryStore = () => {
    return createStore(
        reducer
    )
}

export const withForm = (form = 'storyForm', store = createStoryStore()) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    const StoryForm = reduxForm({
        form: form
    })(() => <form>{story()}</form>)

    return (
        <Provider store={store} >
            <StoryForm />
        </Provider>
    )
}
