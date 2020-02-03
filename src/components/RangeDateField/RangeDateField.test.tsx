import { render } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from '../DateField/DateField'

import { RangeDateField } from './RangeDateField'

describe('PeriodField', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<RangeDateField />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<RangeDateField disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<RangeDateField invalid />)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('test min and max', () => {
  it('should set the disabled modifier when using minDate and maxDate props', async () => {
    const spy = jest.spyOn(DateFieldModule, 'disableByRange')
    const { container } = render(
      <RangeDateField
        calendarProps={{ initialVisibleDate: new Date('2018-10-01') }}
        minDate={new Date('2018-10-01')}
        maxDate={new Date('2018-10-15')}
      />
    )

    expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))

    expect(container.querySelector('[data-date="2018-10-14"] span').className).toEqual(
      container.querySelector('[data-date="2018-10-15"] span').className
    )
    expect(container.querySelector('[data-date="2018-10-15"] span').className).not.toEqual(
      container.querySelector('[data-date="2018-10-16"] span').className
    )
  })
})
