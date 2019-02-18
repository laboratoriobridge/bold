import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { Paginator } from './Paginator'

it('deve renderizar corretamente', () => {
    expect(render(withTheme(<Paginator page={5} total={10} />))).toMatchSnapshot()
    expect(render(withTheme(<Paginator page={0} total={10} />))).toMatchSnapshot()
    expect(render(withTheme(<Paginator page={0} total={9} />))).toMatchSnapshot()
})

it('deve chamar onChange com os valores corretos', () => {
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

it('deve chamar onChange e fazer blur ao usar ENTER', () => {
    const handleChange = jest.fn()
    const wrapper = mount(withTheme(<Paginator page={4} total={10} onChange={handleChange} />))

    wrapper.find('input')
        .simulate('change', { target: { value: '8' } })
        .simulate('keypress', { key: 'Enter' })

    expect(handleChange).toHaveBeenLastCalledWith(7)
})

it('deve chamar onChange somente uma vez', () => {
    const handleChange = jest.fn()
    const wrapper = mount(withTheme(<Paginator page={4} total={10} onChange={handleChange} />))

    wrapper.find('input').simulate('change', { target: { value: '3' } }).simulate('blur')
    expect(handleChange).toHaveBeenCalledTimes(1)
})
