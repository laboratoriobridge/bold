import { fireEvent, render } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import React from 'react'
import { DateRange } from '../../../DateRangePicker/BaseDateRangeInput'
import { ControlledDateRangeCalendar, ControlledDateRangeCalendarProps } from './ControlledDateRangeCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<ControlledDateRangeCalendarProps> = {}) => (
  <ControlledDateRangeCalendar
    visibleDate={new Date('2019-02-09')}
    onVisibleDateChange={() => new Date('2019-02-09')}
    value={
      {
        startDate: undefined,
        endDate: undefined,
      } as DateRange
    }
    {...props}
  />
)

describe('ControlledDateRangeCalendar', () => {
  it('Should render correclty', () => {
    const { container } = render(createComponent())
    expect(container).toMatchSnapshot()
  })

  it('Should render correctly without receiving a value', () => {
    const { container } = render(createComponent({ value: undefined, inputOnFocus: 1 }))
    expect(container).toMatchSnapshot()
  })

  it('With empty initialValues, should leave an empty interval', () => {
    const { getAllByRole } = render(createComponent())
    let index = 4
    getAllByRole('button').forEach((item) => {
      item[index] && expect(item.getAttribute('aria-selected')).toBe('false')
      index++
    })
  })

  it('Should select only the startDate if the endDate is not defined in initialValues', () => {
    const { getByText } = render(
      createComponent({
        value: {
          startDate: new Date('2019-02-11'),
          endDate: undefined,
        } as DateRange,
        inputOnFocus: 1,
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
  })

  it('Should select only the endDate if the endDate is setted in initialValues', () => {
    const { getByText } = render(
      createComponent({
        value: {
          startDate: undefined,
          endDate: new Date('2019-02-11'),
        } as DateRange,
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
  })

  it('With initialValues should select the interval', () => {
    const { getByText } = render(
      createComponent({
        value: {
          startDate: new Date('2019-02-11'),
          endDate: new Date('2019-02-13'),
        } as DateRange,
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
    expect(getByText('13').getAttribute('aria-selected')).toBe('true')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')
  })

  it('Clicks on the same day, should fill initial (final has the same behavior) date with the same value', async () => {
    const change = jest.fn()
    const { getByText } = render(createComponent({ onChange: change, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-10'), endDate: undefined } as DateRange)

    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-10'), endDate: undefined } as DateRange)

    fireEvent.click(getByText('11'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-11'), endDate: undefined } as DateRange)
  })

  it('Should select the endDate correctly, with a predefined startDate', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: {
          startDate: new Date('2019-02-11'),
          endDate: undefined,
        } as DateRange,
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('12'))
    expect(change).toHaveBeenLastCalledWith({
      startDate: new Date('2019-02-11'),
      endDate: new Date('2019-02-12'),
    } as DateRange)
  })

  it('Should select correctly both startDate and endDate, without a predefined interval', () => {
    const change = jest.fn()
    const { rerender, getByText } = render(createComponent({ onChange: change, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-10'), endDate: undefined } as DateRange)

    rerender(
      createComponent({
        value: {
          startDate: new Date('2019-02-10'),
          endDate: undefined,
        } as DateRange,
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('11'))
    expect(change).toHaveBeenLastCalledWith({
      startDate: new Date('2019-02-10'),
      endDate: new Date('2019-02-11'),
    } as DateRange)
  })

  it('Should select correctly both startDate and endDate, with a predefined interval', () => {
    const change = jest.fn()
    const { rerender, getByText } = render(
      createComponent({
        value: {
          startDate: new Date('2019-02-11'),
          endDate: new Date('2019-02-12'),
        } as DateRange,
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('20'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-20'), endDate: undefined } as DateRange)

    rerender(
      createComponent({
        value: {
          startDate: new Date('2019-02-20'),
          endDate: undefined,
        } as DateRange,
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('21'))
    expect(change).toHaveBeenLastCalledWith({
      startDate: new Date('2019-02-20'),
      endDate: new Date('2019-02-21'),
    } as DateRange)
  })

  it('Component should call onChange on every update of the value', async () => {
    const spy = jest.fn()
    const { getByText } = render(createComponent({ onChange: spy, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    expect(spy).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('11'))
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should change only start date when focus is in first input and the selected date is before start date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-19') } as DateRange,
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith({
      startDate: new Date('2019-02-10'),
      endDate: new Date('2019-02-19'),
    } as DateRange)
  })

  it('should start a new period when focus is in first input and the selected date is after final date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-19') } as DateRange,
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('21'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-21'), endDate: undefined } as DateRange)
  })

  it('should start a new period when focus is in second input and the selected date is before start date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-19') } as DateRange,
        onChange: change,
        inputOnFocus: 2,
      })
    )
    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-10'), endDate: undefined } as DateRange)
  })

  it('should change only final date when focus is in second input and the selected date is after final date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-19') } as DateRange,
        onChange: change,
        inputOnFocus: 2,
      })
    )
    fireEvent.click(getByText('23'))
    expect(change).toHaveBeenLastCalledWith({
      startDate: new Date('2019-02-15'),
      endDate: new Date('2019-02-23'),
    } as DateRange)
  })

  describe('should select correctly the received values', () => {
    it('should select only startDate', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: new Date('2019-02-15'), endDate: undefined } as DateRange,
          inputOnFocus: 1,
        })
      )

      expect(getByText('14').getAttribute('aria-selected')).toBe('false')
      expect(getByText('15').getAttribute('aria-selected')).toBe('true')
      expect(getByText('16').getAttribute('aria-selected')).toBe('false')
    })

    it('should select only endDate', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: undefined, endDate: new Date('2019-02-18') } as DateRange,
          inputOnFocus: 2,
        })
      )
      expect(getByText('17').getAttribute('aria-selected')).toBe('false')
      expect(getByText('18').getAttribute('aria-selected')).toBe('true')
      expect(getByText('19').getAttribute('aria-selected')).toBe('false')
    })

    it('should select the received range', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-22') } as DateRange,
          inputOnFocus: 2,
        })
      )
      expect(getByText('14').getAttribute('aria-selected')).toBe('false')
      expect(getByText('15').getAttribute('aria-selected')).toBe('true')
      expect(getByText('22').getAttribute('aria-selected')).toBe('true')
      expect(getByText('23').getAttribute('aria-selected')).toBe('false')
    })
  })

  describe('controllWeekClick', () => {
    it('should change only start date when focus is in first input and the selected date is before start date', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          visibleDate: new Date('2021-01-24'),
          value: { startDate: new Date('2021-01-03'), endDate: new Date('2021-01-09') } as DateRange,
          onChange: change,
          inputOnFocus: 1,
          onlyWeeks: true,
        })
      )
      const tr = container.querySelector('[data-week="27/12/2020-02/01/2021"]')
      fireEvent.click(tr)
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2020-12-27'),
        endDate: new Date('2021-01-09'),
      } as DateRange)
    })

    it('should change only end date when focus is in second input and the selected date is after the end date', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          visibleDate: new Date('2021-01-24'),
          value: { startDate: new Date('2021-01-03'), endDate: new Date('2021-01-09') } as DateRange,
          onChange: change,
          inputOnFocus: 2,
          onlyWeeks: true,
        })
      )
      fireEvent.click(container.querySelector('tr[data-week="10/01/2021-16/01/2021"]'))
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2021-01-03'),
        endDate: new Date('2021-01-16'),
      } as DateRange)
    })

    it('should start a new period when focus is in first input and the selected date is after final date', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          visibleDate: new Date('2021-01-24'),
          value: { startDate: new Date('2021-01-03'), endDate: new Date('2021-01-09') } as DateRange,
          onChange: change,
          inputOnFocus: 1,
          onlyWeeks: true,
        })
      )
      fireEvent.click(container.querySelector('tr[data-week="10/01/2021-16/01/2021"]'))
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2021-01-10'),
        endDate: new Date('2021-01-16'),
      } as DateRange)
    })

    it('should start a new period when focus is in second input and the selected date is before start date', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          visibleDate: new Date('2021-01-24'),
          value: { startDate: new Date('2021-01-03'), endDate: new Date('2021-01-09') } as DateRange,
          onChange: change,
          inputOnFocus: 2,
          onlyWeeks: true,
        })
      )
      fireEvent.click(container.querySelector('tr[data-week="27/12/2020-02/01/2021"]'))
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2020-12-27'),
        endDate: new Date('2021-01-02'),
      } as DateRange)
    })

    it('should only change the start date when focus is in first input and the selected date is after the start date and before the end date', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          visibleDate: new Date('2021-01-24'),
          value: { startDate: new Date('2021-01-03'), endDate: new Date('2021-01-23') } as DateRange,
          onChange: change,
          inputOnFocus: 1,
          onlyWeeks: true,
        })
      )
      fireEvent.click(container.querySelector('tr[data-week="10/01/2021-16/01/2021"]'))
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2021-01-10'),
        endDate: new Date('2021-01-23'),
      } as DateRange)
    })
  })
})
