import * as React from 'react'
import { mount } from 'enzyme'
import { normalize, NumberField } from '../NumberField'
import { shallowRenderAndMatch, testForm } from '../../../../__tests__/test.defaults'

describe('NumberField', () => {
    describe('normalize', () => {
        it('só deve aceitar números', () => {
            expect(normalize('abcdefgh999!@.a')).toEqual('999')
        })
    })

    describe('NumberField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <NumberField name='number' />))
        })

        it('deve aceitar somente números', () => {
            const wrapper = mount(testForm(() => <NumberField name='number' />))
            const inputWrapper = wrapper.find('[name="number"]')
            inputWrapper.simulate('change', { target: { value: 'abc123a!' } })
            expect(inputWrapper.props().value).toEqual('123')
        })
    })
})
