import { render, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from '../DateField/DateField'
import * as DateRangePickerModule from '../DateRangePicker/DateRangePicker'
import { disableByRange } from '../DateField/DateField'

import { DateRangePicker, disableByWeekRange } from './DateRangePicker'
import { DateRange } from './BaseDateRangeInput'

describe('DateRangePicker', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<DateRangePicker />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when opened', () => {
      const { container } = render(<DateRangePicker calendarProps={{ visibleDate: new Date('2018-10-01') }} />)
      fireEvent.focus(container.querySelector('input'))
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<DateRangePicker disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<DateRangePicker invalid />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctyly when onlyWeeks', () => {
      const { container } = render(<DateRangePicker onlyWeeks />)
      expect(container).toMatchSnapshot()
    })

    it('should call onFocus and onBlur when one of the inputs has and lose focus', async () => {
      const focus = jest.fn()
      const blur = jest.fn()
      const { container } = render(<DateRangePicker onFocus={focus} onBlur={blur} />)
      const input = container.querySelectorAll('input')[0]
      fireEvent.focus(input)
      fireEvent.blur(input)

      await waitFor(() => jest.useFakeTimers())

      expect(focus).toHaveBeenCalledTimes(1)
      expect(blur).toHaveBeenCalledTimes(1)
    })

    it('should show calendar correctly when inputs are cleaned', () => {
      const { container } = render(<DateRangePicker calendarProps={{ visibleDate: new Date('2018-10-01') }} />)

      fireEvent.focus(container.querySelector('input'))
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
    })

    it('should show calendar correctly when only startDate is defined and is focused', () => {
      const { container } = render(
        <DateRangePicker value={{ startDate: new Date('2018-10-01'), endDate: undefined }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[0])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toMatchSnapshot()
    })

    it('should show calendar correctly when only endDate is defined and is focused', () => {
      const { container } = render(
        <DateRangePicker value={{ startDate: undefined, endDate: new Date('2018-10-01') }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[1])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toMatchSnapshot()
    })

    it('should show calendar correctly when startDate and endDate are defined and startDate is focused', () => {
      const { container } = render(
        <DateRangePicker value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[0])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toMatchSnapshot()
    })

    it('should show calendar correctly when startDate and endDate are defined and endDate is focused', () => {
      const { container } = render(
        <DateRangePicker value={{ startDate: new Date('2018-10-01'), endDate: new Date('2018-11-15') }} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[1])
      expect(container.querySelector('[data-date="2018-10-01"] span')).toMatchSnapshot()
      expect(container.querySelector('[data-date="2018-11-15"] span')).toMatchSnapshot()
    })
  })

  describe('onChange calls', () => {
    describe('typing on the inputs', () => {
      it('should call onChange when a date is typed (in startDate or endDate)', () => {
        const change = jest.fn()
        const { container } = render(
          <DateRangePicker onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
        )
        const inputs = container.querySelectorAll('input')

        fireEvent.change(inputs[0], { target: { value: '01/10/2018' } })
        expect(change).toHaveBeenLastCalledWith({
          startDate: new Date('2018-10-01'),
          endDate: undefined,
        } as DateRange)

        fireEvent.change(inputs[1], { target: { value: '01/11/2018' } })
        expect(change).toHaveBeenLastCalledWith({
          startDate: undefined,
          endDate: new Date('2018-11-01'),
        } as DateRange)
      })
    })

    describe('clicking on the calendar', () => {
      it('should call onchange with only startDate defined when startDate input has focus and a date is select on calendar', () => {
        const change = jest.fn()
        const { container, getByText } = render(
          <DateRangePicker onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
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
          <DateRangePicker onChange={change} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
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
          <DateRangePicker
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
          <DateRangePicker
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
          <DateRangePicker
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
          <DateRangePicker
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
          <DateRangePicker
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
          <DateRangePicker
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
  it('should call the disableByRange when not choose onlyWeeks', () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <DateRangePicker
        calendarProps={{ visibleDate: new Date('2018-10-01') }}
        minDate={new Date('2018-10-01')}
        maxDate={new Date('2018-10-15')}
      />
    )
    fireEvent.focus(container.querySelector('input'))
    expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))
  })
  it('should call the disableByWeekRange when choose onlyWeeks', () => {
    const spy = jest.spyOn(DateRangePickerModule, 'disableByWeekRange')
    const { container } = render(
      <DateRangePicker
        calendarProps={{ visibleDate: new Date('2021-01-03') }}
        minDate={new Date('2021-01-03')}
        maxDate={new Date('2021-01-16')}
        onlyWeeks
      />
    )
    fireEvent.focus(container.querySelector('input'))
    expect(spy).toHaveBeenCalledWith(new Date('2021-01-03'), new Date('2021-01-16'))
  })
  it('should set the disabled modifier when using minDate and maxDate props', () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <DateRangePicker
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

describe('disabledByWeekRange', () => {
  it('should return a predicate that disables by range', () => {
    const isDisabled = disableByWeekRange(new Date('2020-12-27'), new Date('2021-01-16'))
    expect(isDisabled({ start: new Date('2020-12-27'), end: new Date('2021-01-02') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2021-01-03'), end: new Date('2021-01-08') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2020-12-20'), end: new Date('2020-12-26') })).toBeTruthy()
    expect(isDisabled({ start: new Date('2021-01-17'), end: new Date('2021-01-23') })).toBeTruthy()
  })
  it('should return a predicate that disables date by minDate', () => {
    const isDisabled = disableByWeekRange(new Date('2020-12-27'), null)
    expect(isDisabled({ start: new Date('2020-12-27'), end: new Date('2021-01-02') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2021-01-03'), end: new Date('2021-01-08') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2020-12-20'), end: new Date('2020-12-26') })).toBeTruthy()
    expect(isDisabled({ start: new Date('2020-12-13'), end: new Date('2020-12-19') })).toBeTruthy()
  })
  it('should return a predicate that disables date by maxDate', () => {
    const isDisabled = disableByWeekRange(null, new Date('2021-01-16'))
    expect(isDisabled({ start: new Date('2020-12-27'), end: new Date('2021-01-02') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2021-01-03'), end: new Date('2021-01-08') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2021-01-17'), end: new Date('2021-01-23') })).toBeTruthy()
    expect(isDisabled({ start: new Date('2021-02-07'), end: new Date('2021-02-13') })).toBeTruthy()
  })
  it('should disconsider time when comparing maxDate and minDate', () => {
    const isDisabled = disableByWeekRange(new Date('2020-12-27T20:59:00'), new Date('2021-01-16T20:59:30'))
    expect(isDisabled({ start: new Date('2020-12-27T12:00:00'), end: new Date('2021-01-02T12:00:00') })).toBeFalsy()
    expect(isDisabled({ start: new Date('2021-01-10T12:00:00'), end: new Date('2021-01-16T12:00:00') })).toBeFalsy()
  })
})
