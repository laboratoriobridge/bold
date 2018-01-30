import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'
import { Form } from 'react-final-form'

import { withStore } from './withStore'

export const withForm = (store?) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return withStore(store)(() => {
            const submit = () => undefined
            return (
                <Form
                    onSubmit={submit}
                >
                    {() => story()}
                </Form>
            )
        }, context)
    }
