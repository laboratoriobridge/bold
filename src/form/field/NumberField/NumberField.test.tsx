import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { withForm } from '../../../test'

import { NumberField, parse } from './NumberField'

describe('parse', () => {
  it('should accept numbers only', () => {
    expect(parse('abcdefgh999!@.a')).toEqual('999')
  })
})

describe('Field', () => {
  it('should render correctly', () => {
    const { container } = render(withForm(<NumberField name='number' />))
    expect(container).toMatchSnapshot()
  })

  it('should accept only numbers', () => {
    const { container } = render(withForm(<NumberField name='number' />))
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '\'"@#$*/+./ªºabc123a!' } })
    expect(input.getAttribute('value')).toEqual('123')
  })
})
