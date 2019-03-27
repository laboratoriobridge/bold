import { mount, render } from 'enzyme'
import React from 'react'
import { Form } from 'react-final-form'

import { Button } from '../../../elements/Button'

import { SubmitButton } from './SubmitButton'

it('should render correctly', () => {
  const wrapper = render(
    <Form onSubmit={jest.fn()}>
      {renderProps => <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>}
    </Form>
  )
  expect(wrapper).toMatchSnapshot()
})

it('should be loading when form is submitting', () => {
  const submitHandler = () => new Promise(() => null) // never resolves
  const wrapper = mount(
    <Form onSubmit={submitHandler}>
      {renderProps => <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>}
    </Form>
  )
  wrapper.find('button').simulate('click')
  expect(wrapper.find(Button).prop('loading')).toEqual(true)
})
