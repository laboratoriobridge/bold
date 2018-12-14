import { shallow } from 'enzyme'
import * as React from 'react'

import { padTime, TimeInput } from './TimeInput'

describe('render', () => {
    it('should render correcly', () => {
        expect(shallow(<TimeInput name='time' />)).toMatchSnapshot()
    })
})

describe('onChange', () => {
    it('should be called with input value when input is changed', () => {
        const change = jest.fn()
        const wrapper = shallow(<TimeInput name='time' onChange={change} />)
        expect(change).not.toHaveBeenCalled()
        wrapper.simulate('change', { target: { value: '10:23' } })
        expect(change).toHaveBeenCalledWith('10:23')
    })
})

describe('onChange', () => {
    it('should be called with original input event when input is changed', () => {
        const inputChange = jest.fn()
        const wrapper = shallow(<TimeInput name='time' onInputChange={inputChange} />)
        expect(inputChange).not.toHaveBeenCalled()
        wrapper.simulate('change', { target: { value: '01:48' } })
        expect(inputChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '01:48' } }))
    })
})

describe('onBlur', () => {
    it('should call the onChange prop with padded time', () => {
        const change = jest.fn()
        const wrapper = shallow(<TimeInput name='time' onChange={change} />)
        wrapper.simulate('blur', { target: { value: '1' } })
        expect(change).toHaveBeenCalledWith('10:00')
    })
    it('should call the original onBlur prop', () => {
        const blur = jest.fn()
        const wrapper = shallow(<TimeInput name='time' onBlur={blur} />)
        expect(blur).not.toHaveBeenCalled()
        wrapper.simulate('blur', { target: { value: '01:00' } })
        expect(blur).toHaveBeenCalled()
    })
})

describe('padTime', () => {
    it('should complete value with zeros', () => {
        expect(padTime('')).toEqual('00:00')
        expect(padTime('1')).toEqual('10:00')
        expect(padTime('13')).toEqual('13:00')
        expect(padTime('14:5')).toEqual('14:50')
        expect(padTime('23:56')).toEqual('23:56')
    })
})
