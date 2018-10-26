import { shallow } from 'enzyme'
import * as React from 'react'

import { Calendar } from './Calendar'
import { MonthControl } from './MonthControl'
import { MonthView } from './MonthView'
import { YearControl } from './YearControl'

it('should render correctly', () => {
    expect(shallow(
        <Calendar
            initialVisibleDate={new Date('2018-10-26')}
            activeDate={new Date('2018-10-27')}
        />
    )).toMatchSnapshot()
})

it('should change visibleDate when year is changed', () => {
    const wrapper = shallow(
        <Calendar initialVisibleDate={new Date('2018-10-26')} />
    )
    wrapper.find(YearControl).props().onChange(new Date('2019-10-26'))
    expect(wrapper.state()).toEqual({ visibleDate: new Date('2019-10-26') })
})

it('should change visibleDate when month is changed', () => {
    const wrapper = shallow(
        <Calendar initialVisibleDate={new Date('2018-10-26')} />
    )
    wrapper.find(MonthControl).props().onChange(new Date('2018-09-26'))
    expect(wrapper.state()).toEqual({ visibleDate: new Date('2018-09-26') })
})

it('should change visibleDate and call onDayClick when day is clicked', () => {
    const click = jest.fn()
    const wrapper = shallow(
        <Calendar initialVisibleDate={new Date('2018-10-26')} onDayClick={click} />
    )
    expect(click).not.toHaveBeenCalled()
    wrapper.find(MonthView).props().onDayClick(new Date('2018-10-01'))
    expect(wrapper.state()).toEqual({ visibleDate: new Date('2018-10-01') })
    expect(click).toHaveBeenCalledWith(new Date('2018-10-01'))
})
