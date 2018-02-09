import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Cep, Cpf, Telefone } from './maskedLabels'

describe('Telefone', () => {
    it('deve formatar um telefone corretamente', () => {
        expect(mount(withTheme(<Telefone value='47997773734' />)).text()).toEqual('(47) 99777-3734')
        expect(mount(withTheme(<Telefone value='123' />)).text()).toEqual('(12) 3')
        expect(mount(withTheme(<span><Telefone value='' /></span>)).text()).toEqual('')
        expect(mount(withTheme(<span><Telefone value={null} /></span>)).text()).toEqual('')
    })
})

describe('Cpf', () => {
    it('deve formatar um CPF corretamente', () => {
        expect(mount(withTheme(<Cpf value='08552654938' />)).text()).toEqual('085.526.549-38')
    })
})

describe('Cep', () => {
    it('deve formatar um CEP corretamente', () => {
        expect(mount(withTheme(<Cep value='88040420' />)).text()).toEqual('88040-420')
    })
})
