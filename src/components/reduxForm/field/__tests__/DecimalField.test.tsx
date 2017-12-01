import * as React from 'react'
import { mount } from 'enzyme'
import { parse, format, normalize, DecimalField } from '../DecimalField'
import { getFormValues } from 'redux-form/immutable'
import { shallowRenderAndMatch, testForm, createTestStore } from '../../../../__tests__/test.defaults'

describe('DecimalField', () => {
    describe('format', () => {
        it('converter "." para ","', () => {
            expect(format('42.0091')).toEqual('42,0091')
            expect(format('0.0')).toEqual('0,0')
        })

        it('deve tratar falsy values', () => {
            expect(format(undefined)).toEqual('')
        })
    })

    describe('parse', () => {
        it('deve converter "," para "."', () => {
            expect(parse('42,01')).toEqual('42.01')
            expect(parse('0,0')).toEqual('0.0')
        })

        it('deve tratar falsy values', () => {
            expect(parse(undefined)).toEqual(undefined)
        })
    })

    describe('normalize', () => {
        it('deve tratar falsy values', () => {
            expect(normalize(undefined, 3, 3)).toEqual(undefined)
            expect(normalize(false, 2, 1)).toEqual(false)
            expect(normalize('', 1, 2)).toEqual('')
        })

        it('deve adicionar o separador decimal na posição indicada', () => {
            expect(normalize('4057', 4, 0)).toEqual('4057')
            expect(normalize('4057', 3, 1)).toEqual('405.7')
            expect(normalize('4057', 2, 2)).toEqual('40.57')
            expect(normalize('4057', 1, 3)).toEqual('4.057')
            expect(normalize('4057', 0, 4)).toEqual('0.4057')

            expect(normalize('4050', 3, 1)).toEqual('405.0')
            expect(normalize('1', 1, 2)).toEqual('0.01')
            expect(normalize('1', 3, 3)).toEqual('0.001')
            expect(normalize('034', 1, 1)).toEqual('3.4')
            expect(normalize('0034', 1, 1)).toEqual('3.4')

            expect(normalize('12', 2, 1)).toEqual('1.2')
            expect(normalize('12', 2, 2)).toEqual('0.12')
        })

        it('deve aceitar o valor "0"', () => {
            expect(normalize('0', 2, 1)).toEqual('0.0')
            expect(normalize('0', 2, 2)).toEqual('0.00')
            expect(normalize('0', 3, 3)).toEqual('0.000')

            expect(normalize('00', 2, 2)).toEqual('0.00')
            expect(normalize('0.000', 2, 2)).toEqual('0.00')
        })

        it('deve limpar o valor ao apagar um caractere de um valor "0"', () => {
            expect(normalize('.0', 2, 1)).toEqual('')
            expect(normalize('0.', 2, 1)).toEqual('')
            expect(normalize('0.0', 2, 2)).toEqual('')

            // Falsos positivos
            expect(normalize('.12', 2, 1)).toEqual('1.2')
            expect(normalize('.12', 2, 2)).toEqual('0.12')
        })

        it('deve truncar o número de acordo com o pre e pos especificados', () => {
            expect(normalize('1234567', 1, 3)).toEqual('1.234')
        })

        it('deve aceitar somente números', () => {
            expect(normalize('teste123!', 1, 3)).toEqual('0.123')
            expect(normalize('a', 2, 3)).toEqual('')
        })
    })

    describe('DecimalField', () => {
        it('deve ser renderizado de forma correta', () => {
            shallowRenderAndMatch(testForm(() => <DecimalField name='decimal' pre={3} pos={2} />))
        })

        it('deve tratar o input', () => {
            const store = createTestStore()
            const wrapper = mount(testForm(() => <DecimalField name='decimal' pre={1} pos={2} />, 'test', store))
            const inputWrapper = wrapper.find('[name="decimal"]')

            inputWrapper.simulate('change', { target: { value: 'abc1! .2, 3' } })
            expect(inputWrapper.props().value).toEqual('1,23')

            const formValues = getFormValues('test')(store.getState())
            expect((formValues as any).get('decimal')).toEqual('1.23')
        })
    })
})
