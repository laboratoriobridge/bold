import { fireEvent, render, wait } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { BaseRangeDateInput, Period } from './BaseRangeDateInput'

const FIRST_INPUT = 0
const SECOND_INPUT = 1

describe('PeriodInput', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<BaseRangeDateInput />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<BaseRangeDateInput disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<BaseRangeDateInput invalid />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('format', () => {
    it('should accept and format period as value', async () => {
      const { container } = render(
        <BaseRangeDateInput
          value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
        />
      )
      await wait()
      const inputs = container.querySelectorAll('input')
      expect(inputs[FIRST_INPUT].value).toEqual('01/01/2019')
      expect(inputs[SECOND_INPUT].value).toEqual('02/02/2019')
    })
  })

  describe('change actions', () => {
    it('should call onChange with finalDate as undefined when second input is cleared', async () => {
      const change = jest.fn()

      const { container } = render(
        <BaseRangeDateInput
          onChange={change}
          value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
        />
      )

      await wait()
      const inputs = container.querySelectorAll('input')
      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '' } })
      await wait()

      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-01'),
        finalDate: null,
      } as Period)
    })
  })

  describe('validate entry', () => {
    it('should call onChange only when a valid date is typed', async () => {
      const change = jest.fn()
      const { container } = render(<BaseRangeDateInput onChange={change} />)

      await wait()
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/201' } })
      await wait()
      expect(change).toHaveBeenLastCalledWith(undefined)

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/2019' } })
      await wait()
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), finalDate: undefined } as Period)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '01/01/201' } })
      await wait()
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), finalDate: undefined } as Period)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '02/02/2019' } })
      await wait()
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-01'),
        finalDate: new Date('2019-02-02'),
      } as Period)
    })
  })

  describe('clear actions', () => {
    it('should clear only second input when click clear in second input', async () => {
      const change = jest.fn()
      const { container } = render(
        <BaseRangeDateInput
          value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
          onChange={change}
        />
      )
      await wait()

      const spans = container.querySelectorAll('span')
      const span = spans[SECOND_INPUT + 1]
      fireEvent.click(span)

      await wait()

      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), finalDate: undefined } as Period)
    })

    it('should clear only first input when click clear in first input', async () => {
      const change = jest.fn()
      const { container } = render(
        <BaseRangeDateInput
          value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period}
          onChange={change}
        />
      )
      await wait()

      const spans = container.querySelectorAll('span')
      const span = spans[FIRST_INPUT]
      fireEvent.click(span)

      await wait()

      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, finalDate: new Date('2019-02-02') } as Period)
    })
  })

  describe('customization', () => {
    it('should allow placeholder customization via locale context', () => {
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <BaseRangeDateInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('input').getAttribute('placeholder')).toEqual(ptBr.dateInput.placeholder)
    })
  })
})
