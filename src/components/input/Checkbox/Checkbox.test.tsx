import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { Checkbox } from '../Checkbox'

describe('Checkbox', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<Checkbox label='check' />)
    })
    it('deve conter a classe css "disabled"', function () {
        shallowRenderAndMatch(<Checkbox label='check' disabled />)
    })
})
