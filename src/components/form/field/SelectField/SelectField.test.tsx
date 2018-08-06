import { mount } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { SelectField, SelectFieldProps } from './SelectField'

const options = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
]

const createFormAndField = (fieldProps?: Partial<SelectFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return mount(withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: options[0] }}
            {...formProps}
            render={() => (
                <SelectField name='select1' options={options} {...fieldProps} />
            )}
        />
    )))
}

describe('render', () => {
    it('should render correctly', () => {
        expect(createFormAndField().render()).toMatchSnapshot()
    })
    it('should render correctly when multivalue', () => {
        expect(createFormAndField({ multi: true }, { initialValues: { select1: options } }).render()).toMatchSnapshot()
    })
})

describe('convert', () => {
    // tslint:disable no-string-literal
    it('should convert value to valueKey if convertToValueKey is true', () => {
        const wrapper = createFormAndField()
        const select = wrapper.find(SelectField).instance()
        expect(select['convert'](options[0])).toEqual(1)
    })
    it('should NOT convert value if convertToValueKey is false', () => {
        const wrapper = createFormAndField({ convertToValueKey: false })
        const select = wrapper.find(SelectField).instance()
        expect(select['convert'](options[1])).toEqual(options[1])
    })
    it('should return the own value if value is null', () => {
        const wrapper = createFormAndField({}, { initialValues: {} })
        const select = wrapper.find(SelectField).instance()
        expect(select['convert'](null)).toEqual(null)
    })
})
