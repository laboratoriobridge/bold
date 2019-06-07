import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Form } from 'react-final-form'

import { SubmitButton } from './SubmitButton'

it('should render correctly', () => {
  const { container } = render(
    <Form onSubmit={jest.fn()}>
      {renderProps => <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>}
    </Form>
  )
  expect(container).toMatchSnapshot()
})

it('should be loading when form is submitting', () => {
  const submitHandler = () => new Promise(() => null) // never resolves
  const { container } = render(
    <Form onSubmit={submitHandler}>
      {renderProps => <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>}
    </Form>
  )
  const button = container.querySelector('button')

  fireEvent.click(button)
  expect(button.getAttribute('data-loading')).toEqual('true')
})
