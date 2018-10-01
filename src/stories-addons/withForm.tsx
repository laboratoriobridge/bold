import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

import { Form } from '../components/form/finalForm/Form'

// tslint:disable jsx-no-lambda

export const withForm = (store?) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return () => {
            const submit = () => undefined
            return (
                <Form
                    onSubmit={submit}
                    render={() => story()}
                />
            )
        }
    }
