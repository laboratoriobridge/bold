import { mount } from 'enzyme'
import * as React from 'react'

import { Plural } from './Plural'

describe('Plural', () => {
    it('deve renderizar corretamente', () => {
        expect(mount(<Plural word='mês' count={1} />).text()).toEqual('mês')
        expect(mount(<Plural word='mês' count={2} />).text()).toEqual('meses')
        expect(mount(<Plural word='mês' count={0} />).text()).toEqual('meses')

        expect(mount(<Plural word='mês' count={1} inclusive />).text()).toEqual('1 mês')
        expect(mount(<Plural word='mês' count={2} inclusive />).text()).toEqual('2 meses')
        expect(mount(<Plural word='mês' count={0} inclusive />).text()).toEqual('0 meses')
    })
})
