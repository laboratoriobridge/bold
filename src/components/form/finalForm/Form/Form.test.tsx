import { mount } from 'enzyme'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import { withRouter, withTheme } from '../../../../test'
import { Field, RenderProps } from '../Field'

import { Form } from './Form'

// tslint:disable jsx-no-lambda

it('should render empty', () => {
    expect(mount(withTheme(withRouter(
        <Form onSubmit={jest.fn()} render={jest.fn()} />
    ))).html()).toEqual(null)
})

it('should mount a FinalForm', () => {
    const wrapper = mount(withTheme(withRouter(
        <Form onSubmit={jest.fn()} render={jest.fn()} />
    )))
    expect(wrapper.find(FinalForm).length).toEqual(1)
})

it('should call each field convert value and pass values to onSubmit', () => {
    const input = jest.fn((p: RenderProps) => <input {...p.input} />)
    const onSubmit = jest.fn()
    const wrapper = mount(withTheme(withRouter(
        <Form
            onSubmit={onSubmit}
            initialValues={{
                foo: { id: 1, label: 'Item #1' },
                bar: {
                    qux: { id: 2, label: 'Item #2' },
                },
            }}
            render={(p) => (
                <form onSubmit={p.handleSubmit}>
                    <Field name='foo' render={input} convert={(val) => val.id} />
                    <Field name='bar.qux' render={input} convert={(val) => val.id} />
                </form>
            )}
        />
    )))
    wrapper.find('form').simulate('submit')
    expect(onSubmit).toHaveBeenLastCalledWith({ foo: 1, bar: { qux: 2 } }, expect.any(Object))
})
