import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { LocaleContext } from '../../i18n/LocaleContext'
import ptBr from '../../i18n/locales/pt-BR'
import enUs from '../../i18n/locales/en-US'
import { BaseMonthRangeInput, BaseMonthRangeInputProps } from './BaseMonthRangeInput'
import { ReferenceMonthRange } from './MonthRangePicker'

const createComponent = (props: Partial<BaseMonthRangeInputProps> = {}) => (
  <BaseMonthRangeInput value={{ start: undefined, end: undefined } as ReferenceMonthRange} {...props} />
)

const FIRST_INPUT = 0
const SECOND_INPUT = 1

describe('BaseMonthRangeInput', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(createComponent())
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when disabled', () => {
      const { container } = render(createComponent({ disabled: true }))
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when invalid', () => {
      const { container } = render(createComponent({ invalid: true }))
      expect(container).toMatchSnapshot()
    })
  })

  it('should set focus on start month input when calendar button is clicked', () => {
    const { container } = render(createComponent())
    const button = container.querySelector('button')
    const inputs = container.querySelectorAll('input')
    fireEvent.click(button)
    expect(inputs[FIRST_INPUT]).toEqual(document.activeElement)
    expect(inputs[SECOND_INPUT]).not.toEqual(document.activeElement)
  })

  it('should accept and format the given value', () => {
    const { container } = render(
      createComponent({
        value: {
          start: { month: 0, year: 2021 },
          end: { month: 11, year: 2021 },
        },
      })
    )
    const inputs = container.querySelectorAll('input')
    expect(inputs[FIRST_INPUT].value).toEqual('01/2021')
    expect(inputs[SECOND_INPUT].value).toEqual('12/2021')
  })

  describe('On clear', () => {
    it('should clear only first input when click clear in first input', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: {
            start: { month: 0, year: 2021 },
            end: { month: 11, year: 2021 },
          },
          onChange: change,
        })
      )
      const spans = container.querySelectorAll('span[title="Clear"]')
      const span = spans[FIRST_INPUT]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({
        start: undefined,
        end: { month: 11, year: 2021 },
      } as ReferenceMonthRange)
    })
    it('should clear only second input when click clear in second input', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: {
            start: { month: 0, year: 2021 },
            end: { month: 11, year: 2021 },
          },
          onChange: change,
        })
      )
      const spans = container.querySelectorAll('span[title="Clear"]')
      const span = spans[SECOND_INPUT]
      fireEvent.click(span)
      expect(change).toHaveBeenLastCalledWith({
        start: { month: 0, year: 2021 },
        end: undefined,
      } as ReferenceMonthRange)
    })
  })

  describe('On change', () => {
    const undefinedRange = { start: undefined, end: undefined }

    it('should not call onChange if it is an invalid typed value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
        })
      )

      const first = container.querySelectorAll('input')[FIRST_INPUT]

      fireEvent.change(first, { target: { value: '01/201' } })
      expect(change).not.toBeCalled()
    })

    it('should call onChange if it is a valid typed value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          value: undefined,
        })
      )

      const second = container.querySelectorAll('input')[SECOND_INPUT]

      fireEvent.change(second, { target: { value: '12/2021' } })
      expect(change).toBeCalledWith({
        start: undefined,
        end: { month: 11, year: 2021 },
      })
    })

    it('should call onChange with undefined when a value is before the minMonth and after the maxMonth', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          minMonth: { month: 1, year: 2021 },
          maxMonth: { month: 5, year: 2021 },
        })
      )

      const inputs = container.querySelectorAll('input')
      const first = inputs[FIRST_INPUT]
      const second = inputs[SECOND_INPUT]

      fireEvent.change(first, { target: { value: '01/2021' } })
      expect(change).toBeCalledWith(undefinedRange)

      fireEvent.change(second, { target: { value: '12/2021' } })
      expect(change).toBeCalledWith(undefinedRange)
    })

    it('with only the minMonth defined, should call onChange with undefined if a value is before the minMonth', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          minMonth: { month: 1, year: 2021 },
        })
      )

      const first = container.querySelectorAll('input')[FIRST_INPUT]

      fireEvent.change(first, { target: { value: '01/2021' } })
      expect(change).toBeCalledWith(undefinedRange)

      fireEvent.change(first, { target: { value: '02/2020' } })
      expect(change).toBeCalledWith(undefinedRange)
    })

    it('with only the maxMonth defined, should call onChange with undefined if a value is after the maxMonth', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          maxMonth: { month: 5, year: 2021 },
        })
      )

      const first = container.querySelectorAll('input')[FIRST_INPUT]

      fireEvent.change(first, { target: { value: '07/2021' } })
      expect(change).toBeCalledWith(undefinedRange)

      fireEvent.change(first, { target: { value: '06/2022' } })
      expect(change).toBeCalledWith(undefinedRange)
    })

    it('should call onChange with a new start month when the end month is typed and it is before the start month', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          value: {
            start: { month: 1, year: 2021 },
            end: { month: 2, year: 2021 },
          } as ReferenceMonthRange,
        })
      )
      const second = container.querySelectorAll('input')[SECOND_INPUT]

      fireEvent.change(second, { target: { value: '01/2021' } })
      expect(change).toBeCalledWith({ start: { month: 0, year: 2021 }, end: undefined })
    })

    it('should call onChange with a new start month when the start month is typed and it is after the end month', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          onChange: change,
          value: {
            start: { month: 1, year: 2021 },
            end: { month: 2, year: 2021 },
          } as ReferenceMonthRange,
        })
      )
      const first = container.querySelectorAll('input')[FIRST_INPUT]

      fireEvent.change(first, { target: { value: '04/2021' } })
      expect(change).toBeCalledWith({ start: { month: 3, year: 2021 }, end: undefined })
    })
  })

  describe('customization', () => {
    it('should allow ptBR placeholder customization via locale context', () => {
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <BaseMonthRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('input').getAttribute('placeholder')).toEqual(ptBr.dateInput.placeholder)
      expect(container).toMatchSnapshot()
    })

    it('should allow enUS placeholder customization via locale context', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseMonthRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('input').getAttribute('placeholder')).toEqual(enUs.dateInput.placeholder)
      expect(container).toMatchSnapshot()
    })

    it('should allow ptBr i18n in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={ptBr}>
          <BaseMonthRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual(ptBr.dateRangeField.separator)
      expect(container).toMatchSnapshot()
    })

    it('should allow enUs i18n in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseMonthRangeInput />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual(enUs.dateRangeField.separator)
      expect(container).toMatchSnapshot()
    })

    it('should allow a custom string in range separator', () => {
      const { container } = render(
        <LocaleContext.Provider value={enUs}>
          <BaseMonthRangeInput rangeSeparator={'separator'} />
        </LocaleContext.Provider>
      )
      expect(container.querySelector('strong').textContent).toEqual('separator')
      expect(container).toMatchSnapshot()
    })

    it('should be possible to set a name to inputs', () => {
      const name = 'baseMonthRange'
      const { container } = render(<BaseMonthRangeInput name={name} />)
      expect(container.querySelectorAll('input')[FIRST_INPUT].getAttribute('name')).toEqual(name + '.start')
      expect(container.querySelectorAll('input')[SECOND_INPUT].getAttribute('name')).toEqual(name + '.end')
    })
  })
})
