import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Icon } from '../Icon'

describe('Icon', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<Icon icon='login' />)
    })
    it('deve renderizar tamanho grande', function () {
        shallowRenderAndMatch(<Icon icon='login' size='large' />)
    })
})
