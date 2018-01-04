import * as React from 'react'
import { Map } from 'immutable'
import { ErrorIndicator } from '../ErrorIndicator'
import { shallow } from 'enzyme'

describe('Control', () => {
    it('deve renderizar corretamente', function () {
        const wrapper = shallow(<ErrorIndicator error={Map<string, string>({ titulo: 'titulo', mensagem: 'mensagem' })} />)
        expect(wrapper).toMatchSnapshot()

        wrapper.find('.error-indicator').simulate('mouseover')
        expect(wrapper).toMatchSnapshot()

        wrapper.find('.error-indicator').simulate('mouseleave')
        expect(wrapper).toMatchSnapshot()
    })
})
