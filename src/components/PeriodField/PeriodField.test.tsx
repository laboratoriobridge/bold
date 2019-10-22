import { render } from '@testing-library/react'
import React from 'react'

import * as DateFieldModule from '../DateField/DateField'
import { disableByRange } from '../DateField/DateField'

import { PeriodField } from './PeriodField'

describe('PeriodField', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<PeriodField />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<PeriodField disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<PeriodField invalid />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('test min and max', () => {
    it('should set the disabled modifier when using minDate and maxDate props', () => {
      const spy = jest.spyOn(DateFieldModule, 'disableByRange')
      const { container } = render(<PeriodField minDate={new Date('2018-10-01')} maxDate={new Date('2018-10-15')} />)
      expect(spy).toHaveBeenCalledWith(new Date('2018-10-01'), new Date('2018-10-15'))

      // TODO: better assert for disabled dates
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
})
