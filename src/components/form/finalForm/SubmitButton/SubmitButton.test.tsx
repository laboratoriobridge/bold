import { mount } from 'enzyme'
import * as React from 'react'
import { Form } from 'react-final-form'

import { withTheme } from '../../../../test'
import { Button } from '../../../elements/Button'

import { SubmitButton } from './SubmitButton'

it('should render correctly', () => {
    const wrapper = mount(withTheme(
        <Form onSubmit={jest.fn()}>
            {(renderProps) => (
                <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>
            )}
        </Form>
    ))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should be loading when form is submitting', () => {
    const submitHandler = () => new Promise(() => null) // never resolves
    const wrapper = mount(withTheme(
        <Form onSubmit={submitHandler}>
            {(renderProps) => (
                <SubmitButton handleSubmit={renderProps.handleSubmit}>Submit Button</SubmitButton>
            )}
        </Form>
    ))
    wrapper.find('button').simulate('click')
    expect(wrapper.find(Button).prop('loading')).toEqual(true)
})
