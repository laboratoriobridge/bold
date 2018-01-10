import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'
import { reduxForm } from 'redux-form'

import { withStore } from './withStore'

export const withForm = (form = 'storyForm', store?) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return withStore(store)(() => {
            const StoryForm = reduxForm({
                form,
            })(() => <div>{story()}</div>)

            return (<StoryForm />)
        }, context)
    }
