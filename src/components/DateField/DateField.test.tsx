import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from './DateField'
import { DateField, disableByRange } from './DateField'

describe('DateField', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DateField onChange={jest.fn()} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
    )
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when opened', () => {
    const { container } = render(
      <DateField onChange={jest.fn()} calendarProps={{ visibleDate: new Date('2018-10-01') }} />
    )
    fireEvent.focus(container.querySelector('input'))
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when disabled', () => {
    const { container } = render(
      <DateField onChange={jest.fn()} calendarProps={{ visibleDate: new Date('2018-10-01') }} disabled />
    )
    expect(container).toMatchSnapshot()
  })
  ;['', null, false, undefined].forEach((value: any) => {
    it(`should gracefully treat "${value}" as value`, () => {
      const { container } = render(<DateField value={value} />)
      fireEvent.focus(container.querySelector('input'))
    })
  })
  it('should open the Calendar visibleDate as the current value', () => {
    const { container, queryByText, rerender } = render(<DateField value={new Date('2015-10-10')} />)
    fireEvent.focus(container.querySelector('input'))
    expect(queryByText('Oct')).not.toBeNull()
    expect(queryByText('2015')).not.toBeNull()

    rerender(<DateField value={new Date('2020-01-01')} />)
    expect(queryByText('Oct')).toBeNull()
    expect(queryByText('2015')).toBeNull()
    expect(queryByText('Jan')).not.toBeNull()
    expect(queryByText('2020')).not.toBeNull()
  })
  it('should set the disabled modifier when using minDate and maxDate props', () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <DateField
        calendarProps={{ visibleDate: new Date('2018-10-01') }}
        minDate={new Date('2018-10-01')}
        maxDate={new Date('2018-10-15')}
      />
    )
    fireEvent.focus(container.querySelector('input'))
    expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))

    // TODO: better assert for disabled dates
    expect(container.querySelector('[data-date="2018-10-14"] span').className).toEqual(
      container.querySelector('[data-date="2018-10-15"] span').className
    )
    expect(container.querySelector('[data-date="2018-10-15"] span').className).not.toEqual(
      container.querySelector('[data-date="2018-10-16"] span').className
    )
  })
  it('should open calendar when clicked on input', () => {
    const { container } = render(<DateField value={new Date('2018-10-10')} />)
    fireEvent.focus(container.querySelector('input'))
    expect(container.querySelector('[data-date="2018-10-10"]')).not.toBeNull()
    fireEvent.click(container.querySelector('[data-date="2018-10-10"] span'))
    expect(container.querySelector('[data-date="2018-10-10"]')).toBeNull()
    fireEvent.click(container.querySelector('input'))
    expect(container.querySelector('[data-date="2018-10-10"]')).not.toBeNull()
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
