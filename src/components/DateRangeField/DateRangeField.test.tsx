import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from '../DateField/DateField'
import { disableByRange } from '../DateField/DateField'

import { DateRangeField } from './DateRangeField'
import { DateRange } from './BaseDateRangeInput'

describe('DateRangeField', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<DateRangeField />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when opened', () => {
      const { container } = render(<DateRangeField calendarProps={{ visibleDate: new Date('2018-10-01') }} />)
      fireEvent.focus(container.querySelector('input'))
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<DateRangeField disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<DateRangeField invalid />)
      expect(container).toMatchSnapshot()
    })

    it('should show calendar correctly when inputs are cleaned', () => {
      const { container } = render(<DateRangeField calendarProps={{ visibleDate: new Date('2018-10-01') }} />)

      fireEvent.focus(container.querySelector('input'))
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
    })

    it('should show calendar correctly when only startDate is defined and is focused', () => {
      const { container } = render(<DateRangeField value={{ startDate: new Date('2018-10-01'), endDate: undefined }} />)
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[0])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toThrowErrorMatchingSnapshot()
    })

    it('should show calendar correctly when only endDate is defined and is focused', () => {
      const { container } = render(<DateRangeField value={{ startDate: undefined, endDate: new Date('2018-10-01') }} />)
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[1])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toThrowErrorMatchingSnapshot()
    })

    it('should show calendar correctly when startDate and endDate are defined and startDate is focused', () => {
      const { container } = render(
        <DateRangeField value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[0])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toThrowErrorMatchingSnapshot()
    })

    it('should show calendar correctly when startDate and endDate are defined and endDate is focused', () => {
      const { container } = render(
        <DateRangeField value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[1])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toThrowErrorMatchingSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toMatchSnapshot()
    })
  })

  describe('onChange calls', () => {
    describe('typing on the inputs', () => {
      it('should call onChange when a date is typed (in startDate or endDate)', () => {
        const change = jest.fn()
        const { container } = render(
          <DateRangeField onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.change(inputs[0], { target: { value: '01/10/2018' } })
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-01'),
          endDate: undefined,
        } as DateRange)

        fireEvent.change(inputs[1], { target: { value: '01/11/2018' } })
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-01'),
          endDate: new Date('2018-11-01'),
        } as DateRange)
      })
    })

    describe('clicking on the calendar', () => {
      it('should call onchange with only startDate defined when startDate input has focus and a date is select on calendar', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[0])
        fireEvent.click(getByText('05'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-05'),
          endDate: undefined,
        } as DateRange)
      })
    })

    describe('clicking on the calendar', () => {
      it('should call onchange with only endDate defined when endDate input has focus and a date is select on calendar', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[1])
        fireEvent.click(getByText('05'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: undefined,
          endDate: new Date('2018-10-05'),
        } as DateRange)
      })

      it('should call onchange with only startDate defined when startDate input has focus and the selected date is after endDate value', () => {
        const change = jest.fn()
        const { container, getByText, getByTitle } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[0])
        fireEvent.click(getByTitle('Next month'))
        fireEvent.click(getByText('20'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-11-20'),
          endDate: undefined,
        } as DateRange)
      })

      it('should call onchange with only startDate defined when endDate input has focus and the selected date is before startDate value', () => {
        const change = jest.fn()
        const { container, getByText, getByTitle } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: new Date('2018-10-10'), endDate: new Date('2018-11-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[1])
        fireEvent.click(getByTitle('Previous month'))
        fireEvent.click(getByText('05'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-05'),
          endDate: undefined,
        } as DateRange)
      })

      it('should call onchange with a new endDate when endDate input has focus and the selected date is after his value', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[1])
        fireEvent.click(getByText('20'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-01'),
          endDate: new Date('2018-11-20'),
        } as DateRange)
      })

      it('should call onchange with a new startDate when startDate input has focus and the selected date is before his value', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: new Date('2018-10-10'), endDate: new Date('2018-11-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[0])
        fireEvent.click(getByText('05'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-05'),
          endDate: new Date('2018-11-15'),
        } as DateRange)
      })

      it('should call onchange with switched dates when endDate input has focus and the selected date is before startDate', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: new Date('2018-10-10'), endDate: undefined }}
            calendarProps={{ visibleDate: new Date('2018-09-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[1])
        fireEvent.click(getByText('10'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-09-10'),
          endDate: new Date('2018-10-10'),
        } as DateRange)
      })

      it('should call onchange with switched dates when startDate input has focus and the selected date is after endDate', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangeField
            onChange={change}
            value={{ startDate: undefined, endDate: new Date('2018-10-10') }}
            calendarProps={{ visibleDate: new Date('2018-09-15') }}
          />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.focus(inputs[0])
        fireEvent.click(getByText('10'))
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-09-10'),
          endDate: new Date('2018-10-10'),
        } as DateRange)
      })
    })
  })
})

describe('test min and max', () => {
  it('should set the disabled modifier when using minDate and maxDate props', () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <DateRangeField
        calendarProps={{ visibleDate: new Date('2018-10-01') }}
        minDate={new Date('2018-10-01')}
        maxDate={new Date('2018-10-15')}
      />
    )

    fireEvent.focus(container.querySelector('input'))
    expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))

    expect(container.querySelector('[data-date="2018-10-14"] span').className).toEqual(
      container.querySelector('[data-date="2018-10-15"] span').className
    )
    expect(container.querySelector('[data-date="2018-10-15"] span').className).not.toEqual(
      container.querySelector('[data-date="2018-10-16"] span').className
    )
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
  it('should disconsider time when comparing maxDate and minDate', () => {
    const isDisabled = disableByRange(new Date('2018-10-01T20:59:00'), new Date('2018-10-01T20:59:30'))
    expect(isDisabled(new Date('2018-10-01T12:00:00'))).toBeFalsy()
    expect(isDisabled(new Date('2018-10-01T23:00:00'))).toBeFalsy()
  })
})
