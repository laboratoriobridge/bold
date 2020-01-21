import { matchers } from 'jest-emotion'
import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'

import {
  ControlledRangeDatePickerCalendar,
  ControlledRangeDatePickerCalendarProps,
} from './ControlledRangeDatePickerCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<ControlledRangeDatePickerCalendarProps> = {}) => (
  <ControlledRangeDatePickerCalendar
    initialVisibleDate={new Date('2019-02-09')}
    values={{
      initialDate: undefined,
      finalDate: undefined,
    }}
    {...props}
  />
)

describe('[Period][RangePicker]', () => {
  it('Should render correclty', () => {
    const { container } = render(createComponent())
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
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: null,
        },
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
  })

  it('Should select only the finalDate if the finalDate is setted in initialValues', () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: null,
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
        values: {
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

  it('Clicks on the same day, should fill initial (final has the same behavior) date with the same value', () => {
    const { getByText } = render(createComponent({ inputOnFocus: 1 }))
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('11'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select the finalDate correctly, with a predefined initialDate', async () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: undefined,
        },
        inputOnFocus: 2,
      })
    )

    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('12'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select correctly both initialDate and finalDate, without a predefined interval', () => {
    const { rerender, getByText } = render(createComponent({ inputOnFocus: 1 }))
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    rerender(
      createComponent({
        values: {
          initialDate: new Date('2019-02-10'),
          finalDate: undefined,
        },
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('11'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select correctly both initialDate and finalDate, with a predefined interval', () => {
    let initial: Date
    let final: Date
    const { rerender, getByText } = render(
      createComponent({
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: new Date('2019-02-12'),
        },
        inputOnFocus: 1,
        onChange: (i: Date, f: Date) => {
          initial = i
          final = f
        },
      })
    )

    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')

    fireEvent.click(getByText('20'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('20').getAttribute('aria-selected')).toBe('true')
    expect(getByText('21').getAttribute('aria-selected')).toBe('false')

    rerender(
      createComponent({
        values: {
          initialDate: initial,
          finalDate: final,
        },
        inputOnFocus: 2,
      })
    )

    fireEvent.click(getByText('21'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('20').getAttribute('aria-selected')).toBe('true')
    expect(getByText('21').getAttribute('aria-selected')).toBe('true')
  })

  it('Component should call onChange on every update of the values', async () => {
    const spy = jest.fn()
    const { getByText } = render(createComponent({ onChange: spy, inputOnFocus: 1 }))

    fireEvent.click(getByText('10'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('11'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
