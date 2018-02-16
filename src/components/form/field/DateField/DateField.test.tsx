import { mount, render } from 'enzyme'
import * as moment from 'moment'
import * as React from 'react'
import { FormSpy } from 'react-final-form'

import { withForm } from '../../../../test'

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
    expect(dateField.format('2004-04-20')).toBeInstanceOf(moment)
})

it('deve validar a data no blur', () => {
    const handleChange = jest.fn()
    const wrapper = mount(withForm(
        <>
            <FormSpy onChange={handleChange} subscription={{ values: true, errors: true }} />
            <DateField label='Date test' name='test' disabled={false} />
        </>
    ))

    wrapper.find('input').simulate('change', { target: { value: '20/05/2010' } })
    wrapper.find('input').simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith({ values: { test: '2010-05-20' }, errors: {} })

    wrapper.find('input').simulate('change', { target: { value: '50/60/2011' } })
    wrapper.find('input').simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith({
        errors: { test: 'Data inválida' },
        values: { test: 'Invalid date' },
    })

    wrapper.find('input').simulate('change', { target: { value: '' } })
    wrapper.find('input').simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith({ values: { test: null }, errors: {} })

    wrapper.find('input').simulate('change', { target: { value: '01/01/2012' } })
    wrapper.find('input').simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith({ values: { test: '2012-01-01' }, errors: {} })
})
