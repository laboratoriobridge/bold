import { mount, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { DateInput } from './DateInput'

it('should render correctly', () => {
    expect(shallow(<DateInput />)).toMatchSnapshot()
    expect(shallow(<DateInput value={new Date('2018-10-30')} />)).toMatchSnapshot()
})

it('should call onChange only when a valid date is typed', () => {
    const change = jest.fn()
    const wrapper = shallow(<DateInput onChange={change} />)
    expect(change).not.toHaveBeenCalled()

    wrapper.simulate('change', { target: { value: 'aaa' } })
    expect(change).not.toHaveBeenCalled()

    wrapper.simulate('change', { target: { value: '01/01/201' } })
    expect(change).not.toHaveBeenCalled()

    wrapper.simulate('change', { target: { value: '01/01/2018' } })
    expect(change).toHaveBeenCalledWith(new Date('2018-01-01'))
})

it('should call onChange with null when input is cleared', () => {
    const change = jest.fn()
    const wrapper = shallow(<DateInput onChange={change} value={new Date('2018-10-30')} />)

    wrapper.simulate('change', { target: { value: '' } })
    expect(change).toHaveBeenCalledWith(null)
})

it('should call onInputChange prop when input value is changed', () => {
    const inputChange = jest.fn()
    const wrapper = shallow(<DateInput onInputChange={inputChange} />)
    expect(inputChange).not.toHaveBeenCalled()
    wrapper.simulate('change', { target: { value: '1' } })
    expect(inputChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '1' } }))
})

describe('clear', () => {
    it('should clear the input value', () => {
        const change = jest.fn()
        const wrapper = mount(withTheme(<DateInput value={new Date()} onChange={change} />))
        wrapper.find('span').simulate('click')
        expect(change).toHaveBeenCalledWith(null)
    })
})
