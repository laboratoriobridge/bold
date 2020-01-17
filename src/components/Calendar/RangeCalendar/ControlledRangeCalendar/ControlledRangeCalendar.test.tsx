import { matchers } from 'jest-emotion'
import React from 'react'
import { fireEvent, render, wait } from 'react-testing-library'

import { ControlledRangeCalendar, ControlledRangeCalendarProps } from './ControlledRangeCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<ControlledRangeCalendarProps> = {}) => (
  <ControlledRangeCalendar
    initialVisibleDate={new Date('2019-02-09')}
    values={{
      initialDate: undefined,
      finalDate: undefined,
    }}
    {...props}
  />
)

describe('[Calendar][RangePicker]', () => {
  it('With empty initialValues, should leave an empty interval', () => {
    const { getAllByRole } = render(createComponent())

    getAllByRole('button').forEach(item => expect(item.getAttribute('aria-selected')).toBe('false'))
  })

  it('Should select only the initialDate if the finalDate is null/undefined in initialValues', () => {
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

  it('Should select nothing if only the finalDate is setted in initialValues', () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: null,
          finalDate: new Date('2019-02-11'),
        },
      })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
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

  it('Clicks on the same day, should not have effect', () => {
    const { getByText } = render(createComponent())
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('11'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select the finalDate correctly, with a predefined initialDate', () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: null,
        },
      })
    )
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('12'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select correctly both initialDate and finalDate, without a predefined interval', () => {
    const { getByText } = render(createComponent())
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('10'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('11'))
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
  })

  it('Should select correctly both initialDate and finalDate, with a predefined interval', () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: new Date('2019-02-12'),
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

    fireEvent.click(getByText('21'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('20').getAttribute('aria-selected')).toBe('true')
    expect(getByText('21').getAttribute('aria-selected')).toBe('true')
  })

  it('With interval properly defined, a click should define only the initialDate', () => {
    const { getByText } = render(
      createComponent({
        values: {
          initialDate: new Date('2019-02-11'),
          finalDate: new Date('2019-02-12'),
        },
      })
    )
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')

    fireEvent.click(getByText('15'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('15').getAttribute('aria-selected')).toBe('true')
    expect(getByText('16').getAttribute('aria-selected')).toBe('false')
  })

  it('If the interval has a disabled day, use as finalDate the "disabled-day - 1day"', () => {
    const { getByText } = render(
      createComponent({
        modifiers: {
          disabled: (day: Date) => day.getDate() === new Date('2019-02-13').getDate(),
        },
      })
    )
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('13').getAttribute('aria-selected')).toBe('false')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('11'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('false')
    expect(getByText('13').getAttribute('aria-selected')).toBe('false')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')

    fireEvent.click(getByText('14'))
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
    expect(getByText('13').getAttribute('aria-selected')).toBe('false')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')
  })

  it('If the selected finalDate are earlier than initialDate, invert the dates', async () => {
    let initial: Date
    let final: Date
    const { getByText } = render(
      createComponent({
        onChange: (i: Date, f: Date) => {
          initial = i
          final = f
        },
      })
    )
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(initial).toBeUndefined()
    expect(getByText('11').getAttribute('aria-selected')).toBe('false')
    expect(final).toBeUndefined()

    fireEvent.click(getByText('11'))
    await wait()
    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(initial.getTime()).toBe(new Date('2019-02-11').getTime())
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(final).toBeUndefined()

    fireEvent.click(getByText('10'))
    await wait()
    expect(getByText('10').getAttribute('aria-selected')).toBe('true')
    expect(initial.getTime()).toBe(new Date('2019-02-10').getTime())
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(final.getTime()).toBe(new Date('2019-02-11').getTime())
  })

  it('Component should call onChange on every update of the values', async () => {
    const spy = jest.fn()
    const { getByText } = render(createComponent({ onChange: spy }))

    fireEvent.click(getByText('10'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(1)

    fireEvent.click(getByText('11'))
    await wait()
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
