import { mount, render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { NumberField, parse } from './NumberField'

describe('NumberField', () => {
    describe('parse', () => {
        it('só deve aceitar números', () => {
            expect(parse('abcdefgh999!@.a')).toEqual('999')
        })
    })

    describe('Field', () => {
        it('render', () => {
            const wrapper = render(withForm(<NumberField name='number' />))
            expect(wrapper).toMatchSnapshot()
        })

        it('deve aceitar somente números', () => {
            const wrapper = mount(withForm(<NumberField name='number' />))

            wrapper.find(NumberField).find('input').simulate('change', { target: { value: '\'\"@#$*/+./ªºabc123a!' } })
            expect(wrapper.find(NumberField).find('input').prop('value')).toEqual('123')
        })
    })
})
