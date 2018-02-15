import { render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { DateField } from './DateField'

it('deve ser renderizado de forma correta', () => {
    const wrapper = render(withForm(
        <DateField label='Date test' name='test' disabled={false} />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('deve fazer parse do valor digitado', () => {
    const dateField = new DateField({ name: 'test', label: 'Date test' })
    expect(dateField.parse(null)).toEqual(null)
    expect(dateField.parse('')).toEqual('')
    expect(dateField.parse('20')).toEqual('20')
    expect(dateField.parse('20/09/2001')).toEqual('2001-09-20')
})

it('deve formatar o valor da store', () => {
    const dateField = new DateField({ name: 'test', label: 'Date test' })
    expect(dateField.format(null)).toEqual(null)
    expect(dateField.format('')).toEqual('')
    expect(dateField.format('20')).toEqual('20')
    expect(dateField.format('2004-04-20')).toEqual('20/04/2004')
})
