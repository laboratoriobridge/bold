import { shallow } from 'enzyme'
import * as React from 'react'

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
