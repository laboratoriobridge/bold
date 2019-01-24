import * as React from 'react'
import { Field, Form, FormProps } from 'react-final-form'
import { cleanup, fireEvent, render, wait } from 'react-testing-library'

import { withRouter } from '../../../../test'

import { FormListener, FormListenerProps } from './FormListener'

afterEach(cleanup)

const createComponent = (listenerProps: Partial<FormListenerProps> = {}, formProps: Partial<FormProps> = {}) => {
    return withRouter(
        <Form onSubmit={jest.fn()} {...formProps}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <FormListener
                        hasLeaveModal={false}
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

it('should call onSubmitSucceeded when form is submited without errors', async () => {
    const submitSucceeded = jest.fn()
    const { container } = render(createComponent({ onSubmitSucceeded: submitSucceeded }))

    expect(submitSucceeded).not.toHaveBeenCalled()
    fireEvent.submit(container.querySelector('form'))
    await wait()
    expect(submitSucceeded).toHaveBeenLastCalledWith(
        expect.objectContaining({ submitSucceeded: true, submitFailed: false })
    )
})

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
        expect.objectContaining({ submitSucceeded: false, submitFailed: true, errors: { foo: 'Error' } })
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
        expect.objectContaining({ submitSucceeded: false, submitFailed: true })
    )
})
