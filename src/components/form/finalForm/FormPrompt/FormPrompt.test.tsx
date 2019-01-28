import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Field, Form, FormProps } from 'react-final-form'
import { Router } from 'react-router'
import { fireEvent, render } from 'react-testing-library'

import { FormPrompt, FormPromptProps } from './FormPrompt'

const createComponent = (
    props: Partial<FormPromptProps> = {},
    formProps: Partial<FormProps> = {},
    history = createMemoryHistory()
) => {
    return (
        <Router history={history}>
            <Form onSubmit={jest.fn()} {...formProps}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormPrompt {...props} />

                        <Field name='foo' component='input' type='text' />
                    </form>
                )}
            </Form>
        </Router>
    )
}

it('should call prompt when form is not pristine and not submit succedded', () => {
    const userConfirmation = jest.fn()
    const history = createMemoryHistory({ getUserConfirmation: userConfirmation })
    const { container } = render(createComponent(null, null, history))
    expect(userConfirmation).not.toHaveBeenCalled()
    fireEvent.change(container.querySelector('input'), { target: { value: 'foo' } })
    history.push('/b')
    expect(userConfirmation).toHaveBeenLastCalledWith(FormPrompt.defaultProps.message, expect.anything())
    expect(userConfirmation).toBeCalledTimes(1)
})

it('should NOT call prompt if form is pristine', () => {
    const userConfirmation = jest.fn()
    const history = createMemoryHistory({ getUserConfirmation: userConfirmation })
    render(createComponent(null, null, history))
    expect(userConfirmation).not.toHaveBeenCalled()
    history.push('/b')
    expect(userConfirmation).not.toHaveBeenCalled()
})

it('should NOT call prompt if form has successfully submitted ', () => {
    const userConfirmation = jest.fn()
    const history = createMemoryHistory({ getUserConfirmation: userConfirmation })
    const { container } = render(createComponent(null, null, history))
    expect(userConfirmation).not.toHaveBeenCalled()
    fireEvent.change(container.querySelector('input'), { target: { value: 'foo' } })
    fireEvent.submit(container.querySelector('form'))
    history.push('/b')
    expect(userConfirmation).not.toHaveBeenCalled()
})
