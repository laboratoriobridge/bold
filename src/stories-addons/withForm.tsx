import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

import { Form } from '../components/form/finalForm/Form'

import { withStore } from './withStore'

// tslint:disable jsx-no-lambda

export const withForm = (store?) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return withStore(store)(() => {
            const submit = () => undefined
            return (
                <Form
                    onSubmit={submit}
                    render={() => story()}
                />
            )
        }, context)
    }
