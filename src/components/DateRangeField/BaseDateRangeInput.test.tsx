import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'
import enUs from '../../i18n/locales/en-US'

import { BaseDateRangeInput, DateRange } from './BaseDateRangeInput'

const FIRST_INPUT = 0
const SECOND_INPUT = 1

describe('BaseDateRangeInput', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(<BaseDateRangeInput />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(<BaseDateRangeInput disabled />)
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(<BaseDateRangeInput invalid />)
      expect(container).toMatchSnapshot()
    })
  })

  describe('on click', () => {
    it('should set focus on startDate input when calendar button is clicked', () => {
      const { container } = render(<BaseDateRangeInput />)
      const button = container.querySelector('button')
      const inputs = container.querySelectorAll('input')
      fireEvent.click(button)
      expect(inputs[0]).toEqual(document.activeElement)
      expect(inputs[1]).not.toEqual(document.activeElement)
    })
  })

  describe('format', () => {
    it('should accept and format period as value', () => {
      const { container } = render(
        <BaseDateRangeInput
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
        />
      )
      const inputs = container.querySelectorAll('input')
      expect(inputs[FIRST_INPUT].value).toEqual('01/01/2019')
      expect(inputs[SECOND_INPUT].value).toEqual('02/02/2019')
    })
  })

  describe('change actions', () => {
    it('should call onChange with endDate as undefined when second input is cleared', () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput
          onChange={change}
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
        />
      )
      const inputs = container.querySelectorAll('input')
      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-01'),
        endDate: null,
      } as DateRange)
    })
  })

  describe('validate entry', () => {
    it(`should't call onChange only when a valid date is typed`, () => {
      const change = jest.fn()
      const { container } = render(<BaseDateRangeInput onChange={change} />)

      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/201' } })
      expect(change).not.toBeCalled()

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '01/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), endDate: undefined } as DateRange)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '01/01/201' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), endDate: undefined } as DateRange)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '02/02/2019' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: undefined,
        endDate: new Date('2019-02-02'),
      } as DateRange)
    })

    it(`should call onChange with undefined when a invalid date is typed (before minDate and after maxDate)`, () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput onChange={change} minDate={new Date('2019-01-10')} maxDate={new Date('2019-01-15')} />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '09/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: undefined } as DateRange)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '16/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: undefined } as DateRange)

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '13/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-13'),
        endDate: undefined,
      } as DateRange)
    })

    it(`should call onChange with undefined when a invalid date is typed before minDate`, () => {
      const change = jest.fn()
      const { container } = render(<BaseDateRangeInput onChange={change} minDate={new Date('2019-01-10')} />)
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '09/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: undefined } as DateRange)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '16/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: new Date('2019-01-16') } as DateRange)

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '13/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-13'),
        endDate: undefined,
      } as DateRange)
    })

    it(`should call onChange with undefined when a invalid date is typed after maxDate`, () => {
      const change = jest.fn()
      const { container } = render(<BaseDateRangeInput onChange={change} maxDate={new Date('2019-01-15')} />)
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '09/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-09'), endDate: undefined } as DateRange)

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '16/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: undefined } as DateRange)

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '13/01/2019' } })
      expect(change).toHaveBeenLastCalledWith({
        startDate: new Date('2019-01-13'),
        endDate: undefined,
      } as DateRange)
    })

    it(`should call onChange with only new startDate when endDate value is typed and it's before startDate`, () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput
          onChange={change}
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
        />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[SECOND_INPUT], { target: { value: '01/12/2018' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2018-12-01'), endDate: undefined } as DateRange)
    })

    it(`should call onChange with only new startDate dates when startDate value is typed and it's after endDate`, () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput
          onChange={change}
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
        />
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.change(inputs[FIRST_INPUT], { target: { value: '10/02/2019' } })
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-02-10'), endDate: undefined } as DateRange)
    })
  })

  describe('clear actions', () => {
    it('should clear only second input when click clear in second input', () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
          onChange={change}
        />
      )
      const spans = container.querySelectorAll('span')
      const span = spans[SECOND_INPUT + 1]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({ startDate: new Date('2019-01-01'), endDate: undefined } as DateRange)
    })

    it('should clear only first input when click clear in first input', () => {
      const change = jest.fn()
      const { container } = render(
        <BaseDateRangeInput
          value={{ startDate: new Date('2019-01-01'), endDate: new Date('2019-02-02') } as DateRange}
          onChange={change}
        />
      )
      const spans = container.querySelectorAll('span')
      const span = spans[FIRST_INPUT]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({ startDate: undefined, endDate: new Date('2019-02-02') } as DateRange)
    })
  })

  describe('customization', () => {
    it('should allow ptBR placeholder customization via locale context', () => {
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <BaseDateRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('input').getAttribute('placeholder')).toEqual(ptBr.dateInput.placeholder)
      expect(container).toMatchSnapshot()
    })

    it('should allow enUS placeholder customization via locale context', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseDateRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('input').getAttribute('placeholder')).toEqual(enUs.dateInput.placeholder)
      expect(container).toMatchSnapshot()
    })

    it('should allow ptBr i18n in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <BaseDateRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual(ptBr.dateRangeField.separator)
      expect(container).toMatchSnapshot()
    })

    it('should allow enUs i18n in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseDateRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual(enUs.dateRangeField.separator)
      expect(container).toMatchSnapshot()
    })

    it('should allow a custom string in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseDateRangeInput rangeSeparator={'separator'} />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual('separator')
      expect(container).toMatchSnapshot()
    })

    it('should be possible to set a name to inputs', () => {
      const name = 'baseDateRange'
      const { container } = render(<BaseDateRangeInput name={name} />)
      expect(container.querySelectorAll('input')[0].getAttribute('name')).toEqual(name + '.startDate')
      expect(container.querySelectorAll('input')[1].getAttribute('name')).toEqual(name + '.endDate')
    })
  })
})
