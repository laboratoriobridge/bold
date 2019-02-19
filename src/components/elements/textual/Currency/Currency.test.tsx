import { mount } from 'enzyme'
import React from 'react'

import { Currency } from './Currency'

describe('Currency', () => {
    it('deve renderizar números inteiros com "." como separador de milhar e sem casas decimais', () => {
        expect(mount(<Currency value={1234} />).text()).toEqual('R$ 1.234,00')
        expect(mount(<Currency value={1234.5} />).text()).toEqual('R$ 1.234,50')
        expect(mount(<Currency value={1234.564} />).text()).toEqual('R$ 1.234,56')
        expect(mount(<Currency value={1234.545} />).text()).toEqual('R$ 1.234,55')
    })
    it('deve tratar falsy values', () => {
        expect(mount(<Currency value={null} />).text()).toEqual('')
        expect(mount(<Currency value={undefined} />).text()).toEqual('')
    })
})
