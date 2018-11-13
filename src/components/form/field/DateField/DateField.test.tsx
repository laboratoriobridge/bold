import { render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test'

import { DateField } from './DateField'

it('should be rendered correctly', () => {
    const wrapper = render(withForm(
        <DateField
            label='Date test'
            name='test'
            disabled={false}
            calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
        />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should parse date to ISO string (date only)', () => {
    const dateField = new DateField({ name: 'test', label: 'Date test' })
    expect(dateField.parse(null)).toEqual(null)
    expect(dateField.parse(new Date('2018-10-26T12:00:00'))).toEqual('2018-10-26')
})

it('should format ISO string (date only) from store to Date', () => {
    const dateField = new DateField({ name: 'test', label: 'Date test' })
    expect(dateField.format(null)).toEqual(null)
    expect(dateField.format('')).toEqual(null)
    expect(dateField.format('2004-04-20')).toEqual(new Date('2004-04-20'))
})
