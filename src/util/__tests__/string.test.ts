import { mount } from 'enzyme'
import * as React from 'react'

import { pluralize } from '../string'

describe('pluralize', () => {
    it('deve pluralizar palavras em pt-BR', () => {
        // Regra geral
        expect(pluralize('registro', 1)).toEqual('registro')
        expect(pluralize('registro', 2)).toEqual('registros')
        expect(pluralize('registro', 0)).toEqual('registros')
        expect(pluralize('ano', 2)).toEqual('anos')
        expect(pluralize('procedimento', 2)).toEqual('procedimentos')

        // sufixo 'es'
        expect(pluralize('par', 2)).toEqual('pares')
        expect(pluralize('paz', 2)).toEqual('pazes')
        expect(pluralize('inglês', 2)).toEqual('ingleses')
        expect(pluralize('lápis', 2)).toEqual('lápis')

        // sufixo 'is' de palavras terminadas por al, el, ol, ul
        expect(pluralize('funeral', 2)).toEqual('funerais')
        expect(pluralize('pastel', 2)).toEqual('pasteis')
        expect(pluralize('farol', 2)).toEqual('farois')

        // sufixo 'is' de palavras terminadas por il
        expect(pluralize('fuzil', 2)).toEqual('fuzis')
        expect(pluralize('barril', 2)).toEqual('barris')
        // expect(pluralize('fóssil', 2)).toEqual('fósseis') // TODO
        // expect(pluralize('difícil', 2)).toEqual('difíceis') // TODO
        // sufixo 'ns' de palavras terminadas por 'm'
        expect(pluralize('tom', 2)).toEqual('tons')
        expect(pluralize('afim', 2)).toEqual('afins')

        // palavras terminadas por 'x'
        expect(pluralize('látex', 2)).toEqual('látex')

        // palavras terminadas por 'ão'
        expect(pluralize('cidadão', 2)).toEqual('cidadãos')
        expect(pluralize('mão', 2)).toEqual('mãos')
        // expect(pluralize('cão', 2)).toEqual('cães') // TODO
        // expect(pluralize('alemão', 2)).toEqual('alemães') // TODO
    })
    it('deve incluir o count caso `inclusive` tenha sido especificado', () => {
        expect(pluralize('registro', 1, true)).toEqual('1 registro')
        expect(pluralize('registro', 2, true)).toEqual('2 registros')
        expect(pluralize('registro', 0, true)).toEqual('0 registros')
    })
})
