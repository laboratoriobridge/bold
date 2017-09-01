import React = require('react')
import { shallow } from 'enzyme'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { ChecklistItem } from '../../../components/input/ChecklistItem'

describe('ChecklistItem', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<ChecklistItem label='check' optionValue='VALOR' />)
    })
    it('deve conter a classe css "disabled"', function () {
        shallowRenderAndMatch(<ChecklistItem label='check' disabled optionValue='VALOR' />)
    })
    it('deve adicionar o valor à lista', function () {
        const onChange = jest.fn()

        const wrapper = shallow(<ChecklistItem label='check' optionValue='VALOR' onChange={onChange} />)

        wrapper.find('Checkbox').simulate('change', { target: { checked: true } })

        expect(onChange).toBeCalledWith(['VALOR'])
    })
    it('deve remover o valor da lista', function () {
        const onChange = jest.fn()

        const wrapper = shallow(<ChecklistItem value={['VALOR']} label='check' optionValue='VALOR' onChange={onChange} />)

        wrapper.find('Checkbox').simulate('change', { target: { checked: false } })

        expect(onChange).toBeCalledWith([])
    })
})
