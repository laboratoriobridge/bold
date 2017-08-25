import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Linha } from '../Linha'

describe('Linha', () => {
    it('render', () => {
        shallowRenderAndMatch(<Linha />)
    })
    it('render com tamanho médio', () => {
        shallowRenderAndMatch(<Linha size='medium' />)
    })
})
