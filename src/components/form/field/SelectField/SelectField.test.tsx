import * as React from 'react'
import { render } from 'react-testing-library'

import { withRouter, withTheme } from '../../../../test'
import { Form, FormProps } from '../../finalForm/Form'

import { SelectField, SelectFieldProps } from './SelectField'

const items = [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
]

const createFormAndField = (fieldProps?: Partial<SelectFieldProps>, formProps?: Partial<FormProps>) => {
    // tslint:disable jsx-no-lambda
    return withTheme(withRouter(
        <Form
            onSubmit={jest.fn()}
            initialValues={{ select1: items[0] }}
            {...formProps}
            render={() => (
                <SelectField
                    name='select1'
                    items={items}
                    itemToString={item => item.label}
                    {...fieldProps}
                />
            )}
        />
    ))
}

it('should render correctly', () => {
    const { container } = render(createFormAndField())
    expect(container).toMatchSnapshot()
})

it('should render correctly when multiple', () => {
    const { container } = render(createFormAndField({ multiple: true }, { initialValues: { select1: [items[0]] } }))
    expect(container).toMatchSnapshot()
})
