import * as React from 'react'
import { shallowRenderAndMatch } from '../../../../__tests__/test.defaults'
import { MaskedLabel } from '../MaskedLabel'

describe('MaskLabel', () => {
    it('render', () => {
        shallowRenderAndMatch(
            <MaskedLabel mask='##.##' value='1234' title='label' />
        )
    })
    it('cpf', () => {
        shallowRenderAndMatch(
            <MaskedLabel title='label' name='name' mask='###.###.###-##' value='07788490906' />
        )
    })
    it('cnpj', () => {
        shallowRenderAndMatch(
            <MaskedLabel title='label' mask='###.####.####/####-##' value='12312341234123412' />
        )
    })
    it('cns', () => {
        shallowRenderAndMatch(
            <MaskedLabel title='label' mask='###.####.####.####' value='123123412341234' />
        )
    })
})
