import { FieldRenderProps } from 'react-final-form'

import { BaseFieldProps, extractInputProps, getFieldError } from './util'

describe('getFieldError', () => {
  it('should return the current field active error', () => {
    const baseFieldProps: FieldRenderProps<any, HTMLElement> = {
      input: { name: '', checked: false, onBlur: jest.fn(), onChange: jest.fn(), onFocus: jest.fn(), value: '' },
      meta: {},
    }

    expect(getFieldError({ ...baseFieldProps })).toBeFalsy()

    expect(getFieldError({ ...baseFieldProps, meta: { error: 'Error!' } })).toBeFalsy()
    expect(getFieldError({ ...baseFieldProps, meta: { error: 'Error!', touched: true } })).toEqual('Error!')

    expect(
      getFieldError({
        ...baseFieldProps,
        meta: {
          submitError: 'Submit Error!',
          dirtySinceLastSubmit: true,
        },
      })
    ).toBeFalsy()
    expect(
      getFieldError({
        ...baseFieldProps,
        meta: { submitError: 'Submit Error!', dirtySinceLastSubmit: false },
      })
    ).toEqual('Submit Error!')
  })
})

describe('extractInputProps', () => {
  it('should remove Field specific props from object', () => {
    const obj: BaseFieldProps<{ foo: string; bar: string; name: string }> = {
      name: 'test',
      label: 'Test',
      hasWrapper: true,
      parse: jest.fn(),
      format: jest.fn(),
      convert: jest.fn(),
      validate: jest.fn(),
      foo: '',
      bar: '',
    }
    expect(extractInputProps(obj)).toEqual({
      name: 'test',
      foo: '',
      bar: '',
    })
  })
})
