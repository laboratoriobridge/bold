import * as React from 'react'
import { mount } from 'enzyme'
import { normalize, EmailField } from '../EmailField'
import { shallowRenderAndMatch, testForm } from '../../../../__tests__/test.defaults'

describe('EmailField', () => {
    describe('normalize', () => {
        it('deve normalizar e-mail para lowercase', () => {
            expect(normalize('BONETTI@BRIDGE.UFSC.BR')).toEqual('bonetti@bridge.ufsc.br')
            expect(normalize('')).toEqual('')
            expect(normalize(undefined)).toEqual(undefined)
        })
    })

    describe('EmailField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <EmailField name='email' />))
        })

        it('deve tratar o input', () => {
            const wrapper = mount(testForm(() => <EmailField name='email' />))
            const inputWrapper = wrapper.find('[name="email"]')
            inputWrapper.simulate('change', { target: { value: 'BONETTI@BRIDGE.UFSC.BR' } })
            expect(inputWrapper.props().value).toEqual('bonetti@bridge.ufsc.br')
        })
    })
})
