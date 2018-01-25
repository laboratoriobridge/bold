import { mount, render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'
import { TextInput } from '../../input/TextInput/TextInput'

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

        /* it('deve aceitar somente números', () => {
            const wrapper = mount(withForm(<NumberField name='number' />))

            const inputWrapper = wrapper.find('[name="number"]')
            inputWrapper.simulate('change', { target: { value: 'abc123a!' } })
            expect(inputWrapper.props().value).toEqual('123')
        })*/
    })
})
