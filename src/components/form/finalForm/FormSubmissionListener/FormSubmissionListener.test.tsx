import * as React from 'react'
import { Field, Form, FormProps } from 'react-final-form'
import { fireEvent, render, wait } from 'react-testing-library'

import { withRouter } from '../../../../test'

import { FormSubmissionListener, FormSubmissionListenerProps } from './FormSubmissionListener'

const createComponent = (
    listenerProps: Partial<FormSubmissionListenerProps> = {}, formProps: Partial<FormProps> = {}
) => {
    return withRouter(
        <Form onSubmit={jest.fn()} {...formProps}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <FormSubmissionListener
                        onSubmitFailed={jest.fn()}
                        onSubmitSucceeded={jest.fn()}
                        {...listenerProps}
                    />

                    <Field name='foo' component='input' type='text' />
                </form>
            )}
        </Form>
    )
}

describe('submit succeedded', () => {
    it('should call onSubmitSucceeded when form is submited without errors', async () => {
        const submitSucceeded = jest.fn()
        const { container } = render(createComponent({ onSubmitSucceeded: submitSucceeded }))

        expect(submitSucceeded).not.toHaveBeenCalled()
        fireEvent.submit(container.querySelector('form'))
        await wait()
        expect(submitSucceeded).toHaveBeenLastCalledWith(
            { submitSucceeded: true, submitFailed: false, hasSubmitErrors: false }
        )
    })

    it('should NOT call onSubmitSucceeded on other form interactions besides submission', async () => {
        const submitSucceeded = jest.fn()
        const { container } = render(createComponent({ onSubmitSucceeded: submitSucceeded }))
        const form = container.querySelector('form')
        const input = container.querySelector('input')

        fireEvent.submit(form)
        await wait()
        fireEvent.change(input, { target: { value: 'foo' } })
        await wait()
        fireEvent.focus(input)
        await wait()
        fireEvent.blur(input)

        expect(submitSucceeded).toBeCalledTimes(1)
    })
})

describe('submit failed', () => {
    it('should call onSubmitFailed when form is submited with errors', async () => {
        const submitFailed = jest.fn()
        const { container } = render(createComponent(
            { onSubmitFailed: submitFailed },
            { validate: () => ({ foo: 'Error' }) }
        ))

        expect(submitFailed).not.toHaveBeenCalled()
        fireEvent.submit(container.querySelector('form'))
        await wait()
        expect(submitFailed).toHaveBeenLastCalledWith(
            { submitSucceeded: false, submitFailed: true, hasSubmitErrors: false }
        )
    })

    it('should call onSubmitFailed when form is submited with submitErrors', async () => {
        const submitFailed = jest.fn()
        const { container } = render(createComponent(
            { onSubmitFailed: submitFailed },
            { onSubmit: () => ({ foo: 'Error' }) }
        ))

        expect(submitFailed).not.toHaveBeenCalled()
        fireEvent.submit(container.querySelector('form'))
        await wait()
        expect(submitFailed).toHaveBeenLastCalledWith(
            { submitSucceeded: false, submitFailed: true, submitErrors: { foo: 'Error' }, hasSubmitErrors: true }
        )
    })

    it('should NOT call onSubmitFailed on other form interactions besides submission', async () => {
        const submitFailed = jest.fn()
        const { container } = render(createComponent(
            { onSubmitFailed: submitFailed },
            { onSubmit: () => ({ foo: 'Error' }) }
        ))
        const form = container.querySelector('form')
        const input = container.querySelector('input')

        fireEvent.submit(form)
        await wait()
        fireEvent.change(input, { target: { value: 'foo' } })
        await wait()
        fireEvent.focus(input)
        await wait()
        fireEvent.blur(input)

        expect(submitFailed).toBeCalledTimes(1)
    })
})
