import * as React from 'react'
import { mount } from 'enzyme'
import { normalize, AlfaNumberField } from '../AlfaNumberField'
import { shallowRenderAndMatch, testForm } from '../../../__tests__/test.defaults'

describe('AlfaNumberField', () => {
    describe('normalize', () => {
        it('deve aceitar somente letras, números e espaços', () => {
            expect(normalize('a! ..,/bc 012cd |')).toEqual('a bc 012cd ')
        })
    })

    describe('AlfaNumberField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <AlfaNumberField name='alfa-number' />))
        })

        it('deve aceitar somente letras, números e espaços', () => {
            const wrapper = mount(testForm(() => <AlfaNumberField name='alfa-number' />))
            const inputWrapper = wrapper.find('[name="alfa-number"]')
            inputWrapper.simulate('change', { target: { value: ' abc @123a!' } })
            expect(inputWrapper.props().value).toEqual(' abc 123a')
        })
    })
})
