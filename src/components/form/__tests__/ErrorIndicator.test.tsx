import { shallow } from 'enzyme'
import * as React from 'react'
import { ErrorIndicator } from '../ErrorIndicator'

describe('Control', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = shallow(<ErrorIndicator error={{ titulo: 'titulo', mensagem: 'mensagem' }} />)
        expect(wrapper).toMatchSnapshot()

        wrapper.find('.error-indicator').simulate('mouseover')
        expect(wrapper).toMatchSnapshot()

        wrapper.find('.error-indicator').simulate('mouseleave')
        expect(wrapper).toMatchSnapshot()
    })
})
