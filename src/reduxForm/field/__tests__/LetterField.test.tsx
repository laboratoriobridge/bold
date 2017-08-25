import * as React from 'react'
import { mount } from 'enzyme'
import { normalize, LetterField } from '../LetterField'
import { shallowRenderAndMatch, testForm } from '../../../__tests__/test.defaults'

describe('LetterField', () => {
    describe('normalize', () => {
        it('deve aceitar somente letras e espaços', () => {
            expect(normalize('21 abc 42')).toEqual(' abc ')
        })
    })

    describe('LetterField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <LetterField name='letter' />))
        })

        it('deve aceitar somente letras e espaços', () => {
            const wrapper = mount(testForm(() => <LetterField name='letter' />))
            const inputWrapper = wrapper.find('[name="letter"]')
            inputWrapper.simulate('change', { target: { value: 'abc 123a!' } })
            expect(inputWrapper.props().value).toEqual('abc a')
        })
    })
})
