import * as React from 'react'
import { Icon } from '../Icon'
import { shallow } from 'enzyme'

describe('Icon', () => {
    it('deve renderizar corretamente', function () {
        expect(shallow(<Icon icon='login' />)).toMatchSnapshot()
    })
    it('deve renderizar tamanho grande', function () {
        expect(shallow(<Icon icon='login' size='large' />)).toMatchSnapshot()
    })
})
