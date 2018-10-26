import { mount, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { MonthControl } from './MonthControl'

it('should render correctly', () => {
    expect(shallow(
        <MonthControl visibleDate={new Date('2018-10-26')} onChange={jest.fn()} />
    )).toMatchSnapshot()
})

it('should call onChange function with next month when clicked on next button', () => {
    const change = jest.fn()
    const wrapper = mount(withTheme(
        <MonthControl visibleDate={new Date('2018-10-26')} onChange={change} />
    ))
    expect(change).not.toHaveBeenCalled()
    wrapper.find('button').last().simulate('click')
    expect(change).toHaveBeenCalledWith(new Date('2018-11-26'))
})

it('should call onChange function with previous month when clicked on prev button', () => {
    const change = jest.fn()
    const wrapper = mount(withTheme(
        <MonthControl visibleDate={new Date('2018-10-26')} onChange={change} />
    ))
    expect(change).not.toHaveBeenCalled()
    wrapper.find('button').first().simulate('click')
    expect(change).toHaveBeenCalledWith(new Date('2018-09-26'))
})
