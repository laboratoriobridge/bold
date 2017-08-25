import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { FormField } from '../FormField'
import { Input } from '../../input/Input'

describe('FormField', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<FormField />)
    })
    it('deve renderizar o ícone', function () {
        shallowRenderAndMatch(<FormField icon='login' />)
    })
    it('deve renderizar o ícone na direita', function () {
        shallowRenderAndMatch(<FormField icon='login' iconRight />)
    })
    it('deve renderizar o label', function () {
        shallowRenderAndMatch(<FormField label='label teste' />)
    })
    it('deve renderizar o label com o símbolo de required', function () {
        shallowRenderAndMatch(<FormField label='label teste' required />)
    })
    it('deve renderizar a unidade', function () {
        shallowRenderAndMatch(<FormField unit='unidade' />)
    })
    it('deve renderizar os filhos', function () {
        shallowRenderAndMatch(<FormField><Input type='text' /></FormField>)
    })
})
