import { shallow } from 'enzyme'
import * as React from 'react'

import { createTheme } from '../../../styles'

import * as CalendarModule from './Calendar'
import { Calendar, createDayStyles, defaultModifiers, defaultModifierStyles } from './Calendar'
import { MonthControl } from './MonthControl'
import { MonthView } from './MonthView'
import { isSameDay } from './util'
import { YearControl } from './YearControl'

describe('Calendar', () => {
    it('should render correctly', () => {
        expect(shallow(
            <Calendar
                initialVisibleDate={new Date('2018-10-26')}
                modifiers={{
                    selected: (day: Date) => isSameDay(day, new Date('2018-10-27')),
                }}
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

    it('should accept modifiers and modifierStyles props', () => {
        const spy = jest.spyOn(CalendarModule, 'createDayStyles')
        const customModifiers = {
            today: () => true,
            custom: () => false,
        }
        const customStyles = {
            today: () => ({ color: 'red' }),
            custom: () => ({ backgroundColor: 'pink' }),
        }
        expect(spy).not.toHaveBeenCalled()
        shallow(
            <Calendar
                initialVisibleDate={new Date('2018-10-26')}
                modifiers={customModifiers}
                modifierStyles={customStyles}
            />
        )
        expect(spy).toHaveBeenCalledWith({ ...defaultModifiers, ...customModifiers },
            { ...defaultModifierStyles, ...customStyles })
    })
})

describe('modifiers', () => {
    describe('today', () => {
        it('should return true if date is today', () => {
            expect(defaultModifiers.today(new Date(), {})).toBeTruthy()
            expect(defaultModifiers.today(new Date('1970-01-01'), {})).toBeFalsy()
        })
    })
    describe('adjacentMonth', () => {
        it('should return true if date is next or prev month', () => {
            expect(defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-10-01') }))
                .toBeFalsy()
            expect(defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-09-01') }))
                .toBeTruthy()
            expect(defaultModifiers.adjacentMonth(new Date('2018-10-01'), { visibleDate: new Date('2018-11-01') }))
                .toBeTruthy()
        })
    })
    describe('selected', () => {
        it('should return false by default', () => {
            expect(defaultModifiers.selected(new Date(), {})).toBeFalsy()
        })
    })
    describe('disabled', () => {
        it('should return false by default', () => {
            expect(defaultModifiers.disabled(new Date(), {})).toBeFalsy()
        })
    })
})

describe('modifierStyles', () => {
    const theme = createTheme()

    it('should have "today" styles', () => {
        expect(defaultModifierStyles.today(theme)).toMatchSnapshot()
    })

    it('should have "disabled" styles', () => {
        expect(defaultModifierStyles.disabled(theme)).toMatchSnapshot()
    })

    it('should have "selected" styles', () => {
        expect(defaultModifierStyles.selected(theme)).toMatchSnapshot()
    })

    it('should have "adjacentMonth" styles', () => {
        expect(defaultModifierStyles.adjacentMonth(theme)).toMatchSnapshot()
    })
})

describe('createDayStyles', () => {
    it('should return merged styles from all modifiers that apply', () => {
        const theme = createTheme()
        const stylesCreator = createDayStyles({
            today: () => true,
            disabled: () => true,
            adjacentMonth: () => true,
            selected: () => true,
        }, defaultModifierStyles)
        expect(stylesCreator(new Date(), { theme })).toMatchSnapshot()
    })
})
