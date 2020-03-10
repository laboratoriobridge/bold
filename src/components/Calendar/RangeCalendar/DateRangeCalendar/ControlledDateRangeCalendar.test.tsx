import { matchers } from 'jest-emotion'
import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'

import { ControlledDateRangeCalendar, ControlledDateRangeCalendarProps } from './ControlledDateRangeCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<ControlledDateRangeCalendarProps> = {}) => (
  <ControlledDateRangeCalendar
    visibleDate={new Date('2019-02-09')}
    onVisibleDateChange={() => new Date('2019-02-09')}
    value={{
      initialDate: undefined,
      finalDate: undefined,
    }}
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
    getAllByRole('button').forEach(item => {
      item[index] && expect(item.getAttribute('aria-selected')).toBe('false')
      index++
    })
  })

  it('Should select only the initialDate if the finalDate is not defined in initialValues', () => {
    const { getByText } = render(
      createComponent({
        value: {
          initialDate: new Date('2019-02-11'),
          finalDate: undefined,
        },
        inputOnFocus: 1,
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
  })

  it('Should select only the finalDate if the finalDate is setted in initialValues', () => {
    const { getByText } = render(
      createComponent({
        value: {
          initialDate: undefined,
          finalDate: new Date('2019-02-11'),
        },
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
          initialDate: new Date('2019-02-11'),
          finalDate: new Date('2019-02-13'),
        },
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
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), undefined)

    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), undefined)

    fireEvent.click(getByText('11'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-11'), undefined)
  })

  it('Should select the finalDate correctly, with a predefined initialDate', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: {
          initialDate: new Date('2019-02-11'),
          finalDate: undefined,
        },
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('12'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-11'), new Date('2019-02-12'))
  })

  it('Should select correctly both initialDate and finalDate, without a predefined interval', () => {
    const change = jest.fn()
    const { rerender, getByText } = render(createComponent({ onChange: change, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), undefined)

    rerender(
      createComponent({
        value: {
          initialDate: new Date('2019-02-10'),
          finalDate: undefined,
        },
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('11'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), new Date('2019-02-11'))
  })

  it('Should select correctly both initialDate and finalDate, with a predefined interval', () => {
    const change = jest.fn()
    const { rerender, getByText } = render(
      createComponent({
        value: {
          initialDate: new Date('2019-02-11'),
          finalDate: new Date('2019-02-12'),
        },
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('20'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-20'), undefined)

    rerender(
      createComponent({
        value: {
          initialDate: new Date('2019-02-20'),
          finalDate: undefined,
        },
        onChange: change,
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('21'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-20'), new Date('2019-02-21'))
  })

  it('Component should call onChange on every update of the value', async () => {
    const spy = jest.fn()
    const { getByText } = render(createComponent({ onChange: spy, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('11'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should change only start date when focus is in first input and the selected date is before start date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-19') },
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), new Date('2019-02-19'))
  })

  it('should start a new period when focus is in first input and the selected date is after final date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-19') },
        onChange: change,
        inputOnFocus: 1,
      })
    )
    fireEvent.click(getByText('21'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-21'), undefined)
  })

  it('should start a new period when focus is in second input and the selected date is before start date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-19') },
        onChange: change,
        inputOnFocus: 2,
      })
    )
    fireEvent.click(getByText('10'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-10'), undefined)
  })

  it('should change only final date when focus is in second input and the selected date is after final date', () => {
    const change = jest.fn()
    const { getByText } = render(
      createComponent({
        value: { initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-19') },
        onChange: change,
        inputOnFocus: 2,
      })
    )
    fireEvent.click(getByText('23'))
    expect(change).toHaveBeenLastCalledWith(new Date('2019-02-15'), new Date('2019-02-23'))
  })

  describe('should select correctly the received values', () => {
    it('should select only initialDate', () => {
      const { getByText } = render(
        createComponent({
          value: { initialDate: new Date('2019-02-15'), finalDate: undefined },
          inputOnFocus: 1,
        })
      )

      expect(getByText('14').getAttribute('aria-selected')).toBe('false')
      expect(getByText('15').getAttribute('aria-selected')).toBe('true')
      expect(getByText('16').getAttribute('aria-selected')).toBe('false')
    })

    it('should select only finalDate', () => {
      const { getByText } = render(
        createComponent({
          value: { initialDate: undefined, finalDate: new Date('2019-02-18') },
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
          value: { initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-22') },
          inputOnFocus: 2,
        })
      )
      expect(getByText('14').getAttribute('aria-selected')).toBe('false')
      expect(getByText('15').getAttribute('aria-selected')).toBe('true')
      expect(getByText('22').getAttribute('aria-selected')).toBe('true')
      expect(getByText('23').getAttribute('aria-selected')).toBe('false')
    })
  })
})
