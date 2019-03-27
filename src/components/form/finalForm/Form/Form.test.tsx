import React from 'react'
import { Field as FinalFormField } from 'react-final-form'
import { fireEvent, render, wait } from 'react-testing-library'

import { Field, RenderProps } from '../Field'

import { Form, FormProps } from './Form'

// tslint:disable jsx-no-lambda

const createComponent = (props: Partial<FormProps> = {}) => {
  return (
    <Form
      onSubmit={jest.fn()}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FinalFormField name='foo' component='input' type='text' />
        </form>
      )}
      {...props}
    />
  )
}

it('should render the return of the render prop', () => {
  const renderForm = jest.fn(() => <span>Hello</span>)
  const { container } = render(createComponent({ render: renderForm }))
  expect(renderForm).toHaveBeenCalledTimes(1)
  expect(container.innerHTML).toEqual('<span>Hello</span>')
})

it('should call each field convert value and pass values to onSubmit', () => {
  const input = jest.fn((p: RenderProps) => <input {...p.input} />)
  const onSubmit = jest.fn()
  const { container } = render(
    createComponent({
      onSubmit,
      initialValues: {
        foo: { id: 1, label: 'Item #1' },
        bar: {
          qux: { id: 2, label: 'Item #2' },
        },
      },
      render: p => (
        <form onSubmit={p.handleSubmit}>
          <Field name='foo' render={input} convert={val => val.id} />
          <Field name='bar.qux' render={input} convert={val => val.id} />
        </form>
      ),
    })
  )

  fireEvent.submit(container.querySelector('form'))
  expect(onSubmit).toHaveBeenLastCalledWith({ foo: 1, bar: { qux: 2 } }, expect.any(Object))
})

describe('onSubmitSucceedded', () => {
  it('should call onSubmitSucceeded when form is submited without errors', async () => {
    const onSubmitSucceeded = jest.fn()
    const onSubmitFailed = jest.fn()
    const { container } = render(createComponent({ onSubmitSucceeded, onSubmitFailed }))
    const form = container.querySelector('form')

    expect(onSubmitSucceeded).not.toHaveBeenCalled()
    fireEvent.submit(form)
    await wait()
    expect(onSubmitSucceeded).toBeCalledTimes(1)
    expect(onSubmitSucceeded).toHaveBeenLastCalledWith(expect.objectContaining({ submitSucceeded: true }))

    fireEvent.submit(form)
    await wait()
    expect(onSubmitSucceeded).toBeCalledTimes(2)

    expect(onSubmitFailed).not.toHaveBeenCalled()
  })
  it('should call onSubmitSucceeded when submit is resolved with an empty promise', async () => {
    const onSubmitSucceeded = jest.fn()
    const onSubmitFailed = jest.fn()
    const onSubmit = jest.fn(() => Promise.resolve())
    const { container } = render(createComponent({ onSubmit, onSubmitSucceeded, onSubmitFailed }))
    const form = container.querySelector('form')

    expect(onSubmitSucceeded).not.toHaveBeenCalled()
    fireEvent.submit(form)
    await wait()
    expect(onSubmitSucceeded).toBeCalledTimes(1)
    expect(onSubmitSucceeded).toHaveBeenLastCalledWith(expect.objectContaining({ submitSucceeded: true }))

    fireEvent.submit(form)
    await wait()
    expect(onSubmitSucceeded).toBeCalledTimes(2)

    expect(onSubmitFailed).not.toHaveBeenCalled()
  })
})

describe('onSubmitFailed', () => {
  it('should call onSubmitFailed when form is submited with validation errors', async () => {
    const onSubmitFailed = jest.fn()
    const onSubmitSucceeded = jest.fn()
    const { container } = render(
      createComponent({
        onSubmitFailed,
        onSubmitSucceeded,
        validate: () => ({ foo: 'Error' }),
      })
    )
    const form = container.querySelector('form')

    expect(onSubmitFailed).not.toHaveBeenCalled()
    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(1)
    expect(onSubmitFailed).toHaveBeenLastCalledWith(
      expect.objectContaining({ submitFailed: true, errors: { foo: 'Error' } })
    )

    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(2)

    expect(onSubmitSucceeded).not.toHaveBeenCalled()
  })

  it('should call onSubmitFailed when form is submited with submit errors', async () => {
    const onSubmitFailed = jest.fn()
    const onSubmitSucceeded = jest.fn()
    const { container } = render(
      createComponent({
        onSubmitFailed,
        onSubmitSucceeded,
        onSubmit: () => ({ foo: 'Error' }),
      })
    )
    const form = container.querySelector('form')

    expect(onSubmitFailed).not.toHaveBeenCalled()
    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(1)
    expect(onSubmitFailed).toHaveBeenLastCalledWith(
      expect.objectContaining({ submitFailed: true, submitErrors: { foo: 'Error' } })
    )

    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(2)

    expect(onSubmitSucceeded).not.toHaveBeenCalled()
  })

  it('should call onSubmitFailed when submit is resolved with a non-empty value', async () => {
    const onSubmitFailed = jest.fn()
    const onSubmitSucceeded = jest.fn()
    const onSubmit = jest.fn(() => Promise.resolve({ foo: 'Error' }))
    const { container } = render(
      createComponent({
        onSubmitFailed,
        onSubmitSucceeded,
        onSubmit,
      })
    )
    const form = container.querySelector('form')

    expect(onSubmitFailed).not.toHaveBeenCalled()
    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(1)
    expect(onSubmitFailed).toHaveBeenLastCalledWith(
      expect.objectContaining({ submitFailed: true, submitErrors: { foo: 'Error' } })
    )

    fireEvent.submit(form)
    await wait()
    expect(onSubmitFailed).toHaveBeenCalledTimes(2)

    expect(onSubmitSucceeded).not.toHaveBeenCalled()
  })
})
