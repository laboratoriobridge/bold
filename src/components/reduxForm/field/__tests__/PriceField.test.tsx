import * as React from 'react'
import { mount } from 'enzyme'
import { parse, format, PriceField } from '../PriceField'
import { shallowRenderAndMatch, testForm } from '../../../../__tests__/test.defaults'

describe('PriceField', () => {
    describe('parse', () => {
        it('deve converter "," para "."', () => {
            expect(parse('21,42')).toEqual('21.42')
            expect(parse('0,00')).toEqual('0.00')
            expect(parse('12')).toEqual('12')
        })
    })

    describe('format', () => {
        it('deve converter "." para ","', () => {
            expect(format('21.42')).toEqual('21,42')
        })

        it('deve acionar as casas decimais quando conveniente, ignorando caracteres não numéricos', () => {
            expect(format('12!  3 .asd45')).toEqual('123,45')
            expect(format('12')).toEqual('12')
        })
    })

    describe('PriceField', () => {
        it('render', () => {
            shallowRenderAndMatch(testForm(() => <PriceField name='price' />))
        })

        it('deve tratar o input', () => {
            const wrapper = mount(testForm(() => <PriceField name='price' />))
            const inputWrapper = wrapper.find('[name="price"]')
            inputWrapper.simulate('change', { target: { value: 'as !.@ 123,4567' } })
            expect(inputWrapper.props().value).toEqual('12345,67')
        })
    })
})
