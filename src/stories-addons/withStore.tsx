import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({
})

export const createStoryStore = () => {
    return createStore(
        reducer
    )
}

export const withStore = (store = createStoryStore()) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <Provider store={store} >
                <BrowserRouter>
                    {story()}
                </BrowserRouter>
            </Provider>
        )
    }
