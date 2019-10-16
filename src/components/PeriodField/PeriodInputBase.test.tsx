import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Period, PeriodInputBase } from './PeriodInputBase'

const FIRST_INPUT = 0
const SECOND_INPUT = 1

describe('PeriodInput', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<PeriodInputBase />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<PeriodInputBase disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<PeriodInputBase invalid />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('format', () => {
    it('should accept and format period as value', () => {
      const { container } = render(
        <PeriodInputBase value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period} />
      )
      const inputs = container.querySelectorAll('input')
      expect(inputs[FIRST_INPUT].value).toEqual('01/01/2019')
      expect(inputs[SECOND_INPUT].value).toEqual('02/02/2019')
    })
  })

  describe('change actions', () => {
    const change = jest.fn()
    const { container } = render(
      <PeriodInputBase
        onChange={change}
        value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
      />
    )
    const inputs = container.querySelectorAll('input')

    it('should call onChange when second input is cleared', () => {
      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), finalDate: undefined } as Period)
    })

    it('should call onChange when first input is cleared', () => {
      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, finalDate: undefined } as Period)
    })
  })

  describe('validate entry', () => {
    const change = jest.fn()
    const { container } = render(<PeriodInputBase onChange={change} />)
    const inputs = container.querySelectorAll('input')

    it('should call onChange only when a valid date is typed', () => {
      expect(change).not.toHaveBeenCalled()

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/201' } })
      expect(change).not.toHaveBeenCalled()

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/2018' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2018-01-01'), finalDate: null } as Period)

      expect(change).not.toHaveBeenCalled()

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '01/01/201' } })
      expect(change).not.toHaveBeenCalled()

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '02/02/2018' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2018-01-01'),
        finalDate: new Date('2018-02-02'),
      } as Period)
    })
  })

  describe('clear actions', () => {
    const change = jest.fn()
    const { container } = render(
      <PeriodInputBase
        value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
        onChange={change}
      />
    )
    const spans = container.querySelectorAll('span')

    it('should clear only second input when click clear in second input', () => {
      const span = spans[SECOND_INPUT + 1]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), finalDate: undefined } as Period)
    })

    it('should clear both inputs when click clear in first input', () => {
      const span = spans[FIRST_INPUT]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, finalDate: undefined } as Period)
    })
  })
})
