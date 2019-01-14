import { mount } from 'enzyme'
import * as React from 'react'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { SelectField, SelectFieldProps } from './SelectField'

const items = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
]

const createFormAndField = (fieldProps?: Partial<SelectFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return mount(withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: items[0] }}
            {...formProps}
            render={() => (
                <SelectField name='select1' items={items} {...fieldProps} />
            )}
        />
    )))
}

describe('render', () => {
    it('should render correctly', () => {
        expect(createFormAndField().render()).toMatchSnapshot()
    })
})
