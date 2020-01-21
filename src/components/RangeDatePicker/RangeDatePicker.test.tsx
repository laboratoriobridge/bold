import { render, wait } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from '../DateField/DateField'

import { RangeDatePicker } from './RangeDatePicker'

describe('PeriodField', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<RangeDatePicker />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<RangeDatePicker disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<RangeDatePicker invalid />)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('test min and max', () => {
  it('should set the disabled modifier when using minDate and maxDate props', async () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <RangeDatePicker
        calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
        minDate={new Date('2018-10-01')}
        maxDate={new Date('2018-10-15')}
      />
    )

    await wait()

    expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))

    expect(container.querySelector('[data-date="2018-10-14"] span').className).toEqual(
      container.querySelector('[data-date="2018-10-15"] span').className
    )
    expect(container.querySelector('[data-date="2018-10-15"] span').className).not.toEqual(
      container.querySelector('[data-date="2018-10-16"] span').className
    )
  })
})
