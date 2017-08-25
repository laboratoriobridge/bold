import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Control } from '../Control'
import { Input } from '../../input/Input'


describe('Control', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<Control />)
    })
    it('deve renderizar o ícone', function () {
        shallowRenderAndMatch(<Control icon='login' />)
    })
    it('deve renderizar o ícone na direita', function () {
        shallowRenderAndMatch(<Control icon='login' iconRight />)
    })
    it('deve renderizar os filhos', function () {
        shallowRenderAndMatch(<Control><Input type='text' /></Control>)
    })
})
