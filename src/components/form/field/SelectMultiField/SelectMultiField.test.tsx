import { mount } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { SelectMultiField, SelectMultiFieldProps } from './SelectMultiField'

const items = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
    { value: 3, label: 'Item #3' },
]

const createFormAndField = (fieldProps?: Partial<SelectMultiFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return mount(withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: [items[0], items[2]] }}
            {...formProps}
            render={() => (
                <SelectMultiField
                    name='select1'
                    items={items}
                    itemToString={item => item && item.label}
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
