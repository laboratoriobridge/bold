import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'
import { Calendar } from '../../../elements/Calendar'

import * as DatePickerInputModule from './DatePickerInput'
import { DatePickerInput, disableByRange } from './DatePickerInput'

describe('DatePickerInput', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <DatePickerInput
                onChange={jest.fn()}
                calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
            />
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correctly when disabled', () => {
        const wrapper = render(withTheme(
            <DatePickerInput
                onChange={jest.fn()}
                calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
                disabled
            />
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should set the disabled modifier when using minDate and maxDate props', () => {
        const spy = jest.spyOn(DatePickerInputModule, 'disableByRange')
        const wrapper = mount(withTheme(
            <DatePickerInput minDate={new Date('2018-10-01')} maxDate={new Date('2018-10-30')} />
        ))
        expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-30'))
        expect(wrapper.find(Calendar).props().modifiers.disabled).toEqual(spy.mock.results[0].value)
    })
})

describe('disableByRange', () => {
    it('should return a predicate that disables date by range', () => {
        const isDisabled = disableByRange(new Date('2018-10-10'), new Date('2018-10-15'))
        expect(isDisabled(new Date('2018-10-13'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-10'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-09'))).toBeTruthy()
        expect(isDisabled(new Date('2018-10-15'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-16'))).toBeTruthy()
    })
    it('should return a predicate that disables date by minDate', () => {
        const isDisabled = disableByRange(new Date('2018-10-10'), null)
        expect(isDisabled(new Date('2200-10-13'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-10'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-09'))).toBeTruthy()
        expect(isDisabled(new Date('1970-10-09'))).toBeTruthy()
    })
    it('should return a predicate that disables date by maxDate', () => {
        const isDisabled = disableByRange(null, new Date('2018-10-15'))
        expect(isDisabled(new Date('2200-10-13'))).toBeTruthy()
        expect(isDisabled(new Date('2018-10-16'))).toBeTruthy()
        expect(isDisabled(new Date('2018-10-09'))).toBeFalsy()
        expect(isDisabled(new Date('1970-10-09'))).toBeFalsy()
    })
    it('should disconsider maxDate and minDate time when comparing', () => {
        const isDisabled = disableByRange(new Date('2018-10-01T20:59:00'), new Date('2018-10-01T20:59:30'))
        expect(isDisabled(new Date('2018-10-01T12:00:00'))).toBeFalsy()
        expect(isDisabled(new Date('2018-10-01T23:00:00'))).toBeFalsy()
    })
})
