import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withForm } from '../../../../test/index'
import { Form } from '../../finalForm/Form'

import { TextField } from './TextField'

it('should be rendered correctly', () => {
  const { container } = render(withForm(<TextField name='test' placeholder='Test' maxLength={2} disabled={false} />))
  expect(container).toMatchSnapshot()
})

it('should not include field props on rendered HTML', () => {
  // tslint:disable jsx-no-lambda
  const { container } = render(
    <Form
      render={() => (
        <TextField
          id='test'
          name='test'
          label='Test'
          hasWrapper={true}
          parse={jest.fn()}
          format={jest.fn()}
          convert={jest.fn()}
          required
        />
      )}
    />
  )
  expect(container).toMatchSnapshot()
})

it('should call onChange with current value', () => {
  const change = jest.fn()
  const { container } = render(withForm(<TextField name='test' onChange={change} />))
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: 'foo' } })
  expect(change).toHaveBeenCalledTimes(1)
})
