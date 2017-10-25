import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { ChecklistItem } from '../ChecklistItem'
import { List } from 'immutable'
import { shallow } from 'enzyme'

describe('ChecklistItem', () => {
    it('marcado utilizando array', function () {
        shallowRenderAndMatch(<ChecklistItem label='check' optionValue='1' value={['1']} />)
    })
    it('marcado utilizando Immutable.List', function () {
        shallowRenderAndMatch(<ChecklistItem label='check' optionValue='1' value={List(['1'])} />)
    })
    it('deve conter a classe css "disabled"', function () {
        shallowRenderAndMatch(<ChecklistItem label='check' optionValue='1' disabled />)
    })
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
    it('deve adicionar o valor à Immutable.List', function () {
        const onChange = jest.fn()

        const wrapper = shallow(<ChecklistItem label='check' optionValue='VALOR' onChange={onChange} value={List(['2'])} />)

        wrapper.find('Checkbox').simulate('change', { target: { checked: true } })

        // toBeCalledWith não usa o equals, compara a instância, dessa maneira comparamos o equals do primeiro parâmetro enviado no método
        expect(onChange.mock.calls[0][0]).toEqual(List(['2', 'VALOR']))
    })
    it('deve remover o valor da Immutable.List', function () {
        const onChange = jest.fn()

        const wrapper = shallow(<ChecklistItem value={List(['VALOR'])} label='check' optionValue='VALOR' onChange={onChange} />)

        wrapper.find('Checkbox').simulate('change', { target: { checked: false } })

        expect(onChange.mock.calls[0][0]).toEqual(List([]))
    })
})
