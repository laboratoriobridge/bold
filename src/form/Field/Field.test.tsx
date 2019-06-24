import { render } from '@testing-library/react'
import setFieldData from 'final-form-set-field-data'
import React from 'react'
import { Form } from 'react-final-form'

import metaPath from '../../metaPath/metaPath'

import { Field, FieldProps, FieldRenderProps } from './Field'

interface FormType {
  id: number
  name: string
}

const input = jest.fn((props: FieldRenderProps) => <input {...props.input} />)

const createFormAndField = (fieldProps?: Partial<FieldProps>) => {
  return <Form onSubmit={jest.fn()}>{p => <Field name='field1' render={input} {...fieldProps} />}</Form>
}

describe('render', () => {
  it('should render correctly', () => {
    const { container } = render(createFormAndField({ label: 'Field #1', required: true }))
    expect(container).toMatchSnapshot()
  })

  it('should NOT render wrapper if hasWrapper is false', () => {
    const { container } = render(createFormAndField({ hasWrapper: false }))
    expect(container.querySelectorAll('div').length).toEqual(0)
  })
})

describe('convert', () => {
  it('should throw an exception if convert is defined but necessary mutator is not set on context', () => {
    jest.spyOn(console, 'error').mockImplementation(() => null)
    expect(() => {
      render(createFormAndField({ convert: jest.fn() }))
    }).toThrowErrorMatchingSnapshot()
  })
})

describe('meta', () => {
  it('should accept metaPath as name prop', () => {
    const path = metaPath<FormType>()
    const convert = jest.fn()

    const { container } = render(
      <Form onSubmit={jest.fn()} mutators={{ setFieldData: setFieldData.default || setFieldData }}>
        {p => <Field<number> name={path.id} render={input} convert={convert} />}
      </Form>
    )

    expect(container.querySelector('input').getAttribute('name')).toEqual('id')
  })
})
