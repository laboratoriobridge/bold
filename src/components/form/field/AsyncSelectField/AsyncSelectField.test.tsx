import { mount } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { AsyncSelectField, AsyncSelectFieldProps } from './AsyncSelectField'

const options = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
]

const createFormAndField = (fieldProps?: Partial<AsyncSelectFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return mount(withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: options[0] }}
            {...formProps}
            render={() => (
                <AsyncSelectField
                    name='select1'
                    defaultOptions
                    loadOptions={() => Promise.resolve(options)}
                    cacheOptions={false}
                    {...fieldProps}
                />
            )}
        />
    )))
}

describe('render', () => {
    it('should render correctly', () => {
        expect(createFormAndField().render()).toMatchSnapshot()
    })
})

describe('convert', () => {
    // tslint:disable no-string-literal
    it('should convert value to valueKey if convertToValueKey prop is true', () => {
        const wrapper = createFormAndField()
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](options[0])).toEqual(1)
    })
    it('should convert value to array of valueKey if convertToValueKey prop is true', () => {
        const wrapper = createFormAndField()
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](options)).toEqual([1, 2])
    })
    it('should NOT convert value if convertToValueKey is false', () => {
        const wrapper = createFormAndField({ convertToValueKey: false })
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](options[1])).toEqual(options[1])
    })
    it('should return the own value if value is null', () => {
        const wrapper = createFormAndField({}, { initialValues: {} })
        const select = wrapper.find(AsyncSelectField).instance()
        expect(select['convert'](null)).toEqual(null)
    })
})
