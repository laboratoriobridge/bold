import React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../../test'

import { Cep, Cpf, Telefone } from './maskedLabels'

describe('Telefone', () => {
    it('deve formatar um telefone corretamente', () => {
        expect(render(withTheme(<Telefone value='47997773734' />)).container.innerHTML).toEqual('(47) 99777-3734')
        expect(render(withTheme(<Telefone value='4799777373' />)).container.innerHTML).toEqual('(47) 9977-7373')
        expect(render(withTheme(<Telefone value='123' />)).container.innerHTML).toEqual('(12) 3')
        expect(render(withTheme(<span><Telefone value='' /></span>)).container.innerText).toBeFalsy()
        expect(render(withTheme(<span><Telefone value={null} /></span>)).container.innerText).toBeFalsy()
    })
})

describe('Cpf', () => {
    it('deve formatar um CPF corretamente', () => {
        expect(render(withTheme(<Cpf value='08552654938' />)).container.innerHTML).toEqual('085.526.549-38')
    })
})

describe('Cep', () => {
    it('deve formatar um CEP corretamente', () => {
        expect(render(withTheme(<Cep value='88040420' />)).container.innerHTML).toEqual('88040-420')
    })
})
