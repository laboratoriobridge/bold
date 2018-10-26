import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { MonthView } from './MonthView'

it('should render correctly', () => {
    expect(render(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} />
    ))).toMatchSnapshot()
})

it('should call onDayClick with correct date when clicked on a date', () => {
    const click = jest.fn()
    const wrapper = mount(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} onDayClick={click} />
    ))
    expect(click).not.toHaveBeenCalled()
    wrapper.find('td[data-date="2018-10-20"] span').simulate('click')
    expect(click).toHaveBeenCalledWith(new Date('2018-10-20'))
})

it('should call onDayHover with correct date when hovered on a date', () => {
    const hover = jest.fn()
    const wrapper = mount(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} onDayHover={hover} />
    ))
    expect(hover).not.toHaveBeenCalled()
    wrapper.find('td[data-date="2018-10-01"] span').simulate('mouseover')
    expect(hover).toHaveBeenCalledWith(new Date('2018-10-01'))
})

it('should use renderDay prop to render day', () => {
    const renderDay = jest.fn(() => '-')
    const wrapper = mount(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} renderDay={renderDay} />
    ))
    expect(renderDay).toHaveBeenCalledTimes(35) // Called once for each day rendered on calendar
    expect(wrapper.find('td[data-date="2018-10-01"]').text()).toEqual('-')
})

it('render week name', () => {
    const renderWeek = jest.fn(() => '-')
    const wrapper = mount(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} renderWeekName={renderWeek} />
    ))
    expect(renderWeek).toHaveBeenCalledTimes(7) // Called once for each week rendered on calendar
    expect(wrapper.find('thead').text()).toEqual('-------')
})

it('should use createDayStyles function to create styles for days', () => {
    const createDayStyles = jest.fn(() => ({ color: 'red' }))
    const wrapper = mount(withTheme(
        <MonthView visibleDate={new Date('2018-10-26')} createDayStyles={createDayStyles} />
    ))
    expect(createDayStyles).toHaveBeenCalledTimes(35) // Called once for each day rendered on calendar
    expect(wrapper.render()).toMatchSnapshot()
})
