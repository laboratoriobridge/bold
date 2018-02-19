import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Paginator } from './Paginator'

it('deve renderizar corretamente', () => {
    expect(render(withTheme(<Paginator page={5} total={10} />))).toMatchSnapshot()
    expect(render(withTheme(<Paginator page={0} total={10} />))).toMatchSnapshot()
    expect(render(withTheme(<Paginator page={0} total={9} />))).toMatchSnapshot()
})

it('deve conter os números corretos de acordo com a configuração', () => {
    const handleChange = jest.fn()
    const wrapper = mount(withTheme(<Paginator page={4} total={10} onChange={handleChange} />))
    expect(handleChange).not.toHaveBeenCalled()

    wrapper.find('input').simulate('change', { target: { value: '4' } }).simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith(3)

    wrapper.find('input').simulate('change', { target: { value: '10' } }).simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith(9)

    wrapper.find('input').simulate('change', { target: { value: '11' } }).simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith(9)

    wrapper.find('input').simulate('change', { target: { value: '0' } }).simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith(9)

    wrapper.find('input').simulate('change', { target: { value: '1' } }).simulate('blur')
    expect(handleChange).toHaveBeenLastCalledWith(0)
})
