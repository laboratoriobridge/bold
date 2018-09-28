import { mount } from 'enzyme'
import { FieldState } from 'final-form'
import * as setFieldData from 'final-form-set-field-data'
import * as React from 'react'
import { Field as FinalField, Form } from 'react-final-form'

import { withTheme } from '../../../../test'
import { FormField } from '../../FormField'

import { Field, FieldProps, RenderProps } from './Field'

const input = jest.fn((props: RenderProps) => <input {...props.input} />)

const createFormAndField = (fieldProps?: Partial<FieldProps>) => {
    return mount(withTheme(
        <Form onSubmit={jest.fn()}>
            {p => <Field name='field1' render={input} {...fieldProps} />}
        </Form>
    ))
}

it('should render correctly', () => {
    expect(createFormAndField({ label: 'Field #1', required: true }).render()).toMatchSnapshot()
})

it('should NOT render wrapper if hasWrapper is false', () => {
    const wrapper = createFormAndField({ hasWrapper: false })
    expect(wrapper.find(FormField).length).toEqual(0)
})

describe('convert', () => {
    it('should throw an exception if convert is defined but necessary mutator is not set on context', () => {
        jest.spyOn(console, 'error').mockImplementation(() => null)
        expect(() => {
            createFormAndField({ convert: jest.fn() })
        }).toThrowErrorMatchingSnapshot()
    })
    it('should set convert function on field data', () => {
        const convert = jest.fn()
        const wrapper = mount(withTheme(
            <Form onSubmit={jest.fn()} mutators={{ setFieldData: setFieldData.default || setFieldData }}>
                {p => <Field name='field1' render={input} convert={convert} />}
            </Form>
        ))
        const formDieldState = wrapper.find(FinalField).instance().state as any
        const fieldState = formDieldState.state as FieldState
        expect(fieldState.data).toEqual({ convert })
    })
})
