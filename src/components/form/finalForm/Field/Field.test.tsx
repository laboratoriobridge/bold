import { mount } from 'enzyme'
import * as setFieldData from 'final-form-set-field-data'
import * as React from 'react'
import { Form } from 'react-final-form'

import metaPath from '../../../../metaPath/metaPath'
import { withTheme } from '../../../../test'
import { FieldWrapper } from '../../FieldWrapper'

import { Field, FieldCmp, FieldProps, RenderProps } from './Field'

interface FormType {
    id: number
    name: string
}

const input = jest.fn((props: RenderProps) => <input {...props.input} />)

const createFormAndField = (fieldProps?: Partial<FieldProps>) => {
    return mount(withTheme(
        <Form onSubmit={jest.fn()}>
            {p => <Field name='field1' render={input} {...fieldProps} />}
        </Form>
    ))
}

describe('render', () => {
    it('should render correctly', () => {
        expect(createFormAndField({ label: 'Field #1', required: true }).render()).toMatchSnapshot()
    })

    it('should NOT render wrapper if hasWrapper is false', () => {
        const wrapper = createFormAndField({ hasWrapper: false })
        expect(wrapper.find(FieldWrapper).length).toEqual(0)
    })
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
        const fieldState = wrapper.find(FieldCmp).props().reactFinalForm.getFieldState('field1')
        expect(fieldState.data).toEqual({ convert })
    })
})

describe('meta', () => {
    it('should work normally with metaPath', () => {
        const path = metaPath<FormType>()
        const convert = jest.fn()
        const wrapper = mount(withTheme(
            <Form onSubmit={jest.fn()} mutators={{ setFieldData: setFieldData.default || setFieldData }}>
                {p => <Field<number> name={path.id} render={input} convert={convert} />}
            </Form>
        ))
        const fieldState = wrapper.find(FieldCmp).props().reactFinalForm.getFieldState(path.id.absolutePath())
        expect(fieldState.data).toEqual({ convert })
    })
})
