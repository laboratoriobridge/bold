import { render } from '@testing-library/react'
import React from 'react'

import { withForm } from '../../../../test'

import { DateField, format, parse } from './DateField'

it('should be rendered correctly', () => {
  const { container } = render(
    withForm(
      <DateField
        label='Date test'
        name='test'
        disabled={false}
        calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
      />
    )
  )
  expect(container).toMatchSnapshot()
})

describe('parse', () => {
  it('should parse date to ISO string (date only)', () => {
    expect(parse(null)).toEqual(null)
    expect(parse(new Date('0001-01-02'))).toEqual('0001-01-02')
    expect(parse(new Date('2018-10-26T12:34:12'))).toEqual('2018-10-26')
  })
})

describe('format', () => {
  it('should format ISO string (date only) from store to Date', () => {
    expect(format(null)).toEqual(null)
    expect(format('')).toEqual(null)
    expect(format('foo')).toEqual(null)
    expect(format('2004-1-1')).toEqual(new Date('2004-01-01'))
    expect(format('2004-04-20')).toEqual(new Date('2004-04-20'))
  })
})
