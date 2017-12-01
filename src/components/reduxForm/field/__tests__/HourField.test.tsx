import * as React from 'react'
import { mount } from 'enzyme'
import { normalize, HourField } from '../HourField'
import { shallowRenderAndMatch, testForm } from '../../../../__tests__/test.defaults'

describe('HourField', () => {
    describe('normalize', () => {
        it('deve normalizar input para formato HH:mm ou HH', () => {
            expect(normalize('1234')).toEqual('12:34')
            expect(normalize('abcdefgh9999!@.a')).toEqual('99:99')
            expect(normalize('12')).toEqual('12')
        })
    })

    describe('HourField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <HourField name='hour' />))
        })

        it('deve aceitar somente números', () => {
            const wrapper = mount(testForm(() => <HourField name='hour' />))
            const inputWrapper = wrapper.find('[name="hour"]')
            inputWrapper.simulate('change', { target: { value: '1010' } })
            expect(inputWrapper.props().value).toEqual('10:10')
        })
    })
})
