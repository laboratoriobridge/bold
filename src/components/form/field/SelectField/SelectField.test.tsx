import { render } from '@testing-library/react'
import React from 'react'

import metaPath from '../../../../metaPath/metaPath'
import { Form, FormProps } from '../../finalForm/Form'
import { DefaultItemType } from '../../input/Select'

import { SelectField, SelectFieldProps } from './SelectField'

const items: DefaultItemType[] = [{ value: 1, label: 'Item #1' }, { value: 2, label: 'Item #2' }]

const createFormAndField = (fieldProps?: Partial<SelectFieldProps>, formProps?: Partial<FormProps>) => {
  // tslint:disable jsx-no-lambda
  return (
    <Form
      onSubmit={jest.fn()}
      initialValues={{ select1: items[0] }}
      {...formProps}
      render={() => (
        <SelectField
          name='select1'
          items={items}
          itemToString={item => item.label}
          itemIsEqual={(a, b) => a.value === b.value}
          {...fieldProps}
        />
      )}
    />
  )
}

interface FormType {
  select1: DefaultItemType
  select2: DefaultItemType[]
}

const meta = metaPath<FormType>()

it('should render correctly', () => {
  const { container } = render(createFormAndField())
  expect(container).toMatchSnapshot()
})

it('should render correctly when multiple', () => {
  const { container } = render(createFormAndField({ multiple: true }, { initialValues: { select1: [items[0]] } }))
  expect(container).toMatchSnapshot()
})

it('should accept meta path as name', () => {
  render(createFormAndField({ name: meta.select1 }))
  render(createFormAndField({ name: meta.select2, multiple: true }))
})
