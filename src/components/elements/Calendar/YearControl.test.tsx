import { mount, shallow } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { YearControl } from './YearControl'

it('should render correctly', () => {
    expect(shallow(
        <YearControl visibleDate={new Date('2018-10-26')} onChange={jest.fn()} />
    )).toMatchSnapshot()
})

it('should call onChange function with next year when clicked on next button', () => {
    const change = jest.fn()
    const wrapper = mount(withTheme(
        <YearControl visibleDate={new Date('2018-10-26')} onChange={change} />
    ))
    expect(change).not.toHaveBeenCalled()
    wrapper.find('button').last().simulate('click')
    expect(change).toHaveBeenCalledWith(new Date('2019-10-26'))
})

it('should call onChange function with previous year when clicked on prev button', () => {
    const change = jest.fn()
    const wrapper = mount(withTheme(
        <YearControl visibleDate={new Date('2018-10-26')} onChange={change} />
    ))
    expect(change).not.toHaveBeenCalled()
    wrapper.find('button').first().simulate('click')
    expect(change).toHaveBeenCalledWith(new Date('2017-10-26'))
})
