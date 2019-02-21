import { mount } from 'enzyme'
import React from 'react'

import { Percentage } from './Percentage'

describe('Percentage', () => {
    it('deve transformar o valor para sua representação em porcentagem', () => {
        expect(mount(<Percentage value={34 / 100} />).text()).toEqual('34%')
        expect(mount(<Percentage value={0 / 100} />).text()).toEqual('0%')
        expect(mount(<Percentage value={10 / 0} />).text()).toEqual('0%')
    })
})
