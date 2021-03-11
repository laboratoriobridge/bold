import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { DateRange } from '../DateRangePicker/BaseDateRangeInput'
import { MonthRangePicker, MonthRangePickerProps, ReferenceMonthRange } from './MonthRangePicker'

const createComponent = (props: Partial<MonthRangePickerProps> = {}) => (
  <MonthRangePicker
    value={{ start: undefined, end: undefined } as ReferenceMonthRange}
    monthPickerProps={{ visibleMonth: { month: 1, year: 2021 } }}
    {...props}
  />
)

const FIRST = 0
const SECOND = 1

describe('MonthRangePicker', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(
        createComponent({
          monthPickerProps: { visibleMonth: undefined },
        })
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly when opened', () => {
      const { container } = render(createComponent())
      fireEvent.focus(container.querySelector('input'))
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

    it('should call onFocus and onBlur when one of the inputs has and lose focus', async () => {
      const focus = jest.fn()
      const blur = jest.fn()
      const { container } = render(createComponent({ onBlur: blur, onFocus: focus }))
      const input = container.querySelectorAll('input')[0]
      fireEvent.focus(input)
      fireEvent.blur(input)

      await waitFor(() => jest.useFakeTimers())

      expect(focus).toHaveBeenCalledTimes(1)
      expect(blur).toHaveBeenCalledTimes(1)
    })

    it('should show month picker correctly when inputs are cleaned', () => {
      const { container } = render(createComponent())
      fireEvent.focus(container.querySelector('input'))
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when only start month is defined and the first input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 1, year: 2021 },
            end: undefined,
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[FIRST])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when only start month is defined and the second input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 1, year: 2021 },
            end: undefined,
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[SECOND])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when only end month is defined and the first input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: undefined,
            end: { month: 1, year: 2021 },
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[FIRST])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when only end month is defined and the second input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: undefined,
            end: { month: 1, year: 2021 },
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[SECOND])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when start month e end month are defined and the first input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 0, year: 2021 },
            end: { month: 3, year: 2021 },
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[FIRST])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })

    it('should show month picker correctly when start month e end month are defined and the second input is focused', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 0, year: 2021 },
            end: { month: 3, year: 2021 },
          },
        })
      )
      const inputs = container.querySelectorAll('input')

      fireEvent.focus(inputs[SECOND])
      expect(container.querySelector('button[title="January"]')).toMatchSnapshot()
      expect(container.querySelector('button[title="February"]')).toMatchSnapshot()
    })
  })
  describe('on change', () => {
    describe('typing on the inputs', () => {
      it('should call onChange when a month is typed in first input', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: undefined,
              end: { month: 2, year: 2021 },
            },
          })
        )
        const input = container.querySelectorAll('input')[FIRST]

        fireEvent.change(input, { target: { value: '01/2021' } })
        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-03-31'),
        } as DateRange)
      })

      it('should call onChange when a month is typed in second input', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
          })
        )
        const input = container.querySelectorAll('input')[SECOND]

        fireEvent.change(input, { target: { value: '01/2021' } })
        expect(change).toBeCalledWith({
          startDate: undefined,
          endDate: new Date('2021-01-31'),
        } as DateRange)
      })
    })

    describe('clicking on month picker', () => {
      it('should call onChange with only the startDate when the first input is focused and an arbitrary month is selected ', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
          })
        )
        const input = container.querySelectorAll('input')[FIRST]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="January"]'))

        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-01-31'),
        } as DateRange)
      })

      it('should call onChange with only the endDate when the second input is focused and an arbitrary month is selected ', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
          })
        )
        const input = container.querySelectorAll('input')[SECOND]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="January"]'))
        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-01-31'),
        } as DateRange)
      })

      it('should call onChange with a new period when the first input is focused and the selected month is after the second input value', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 0, year: 2021 },
              end: { month: 1, year: 2021 },
            },
          })
        )
        const input = container.querySelectorAll('input')[FIRST]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="March"]'))
        expect(change).toBeCalledWith({
          startDate: new Date('2021-03-01'),
          endDate: new Date('2021-03-31'),
        } as DateRange)
      })

      it('should call onChange with a new period when the second input is focused and the selected month is before the first input value', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 1, year: 2021 },
              end: { month: 2, year: 2021 },
            },
          })
        )
        const input = container.querySelectorAll('input')[SECOND]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="January"]'))
        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-01-31'),
        } as DateRange)
      })

      it('should call onChange with a new endDate when the second input is focused and the selected month is after the second input value', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 0, year: 2021 },
              end: { month: 2, year: 2021 },
            },
          })
        )
        const input = container.querySelectorAll('input')[SECOND]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="March"]'))
        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-03-31'),
        } as DateRange)
      })

      it('should call onChange with a new startDate when the first input is focused and the selected month is before the first input value', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 1, year: 2021 },
              end: { month: 2, year: 2021 },
            },
          })
        )
        const input = container.querySelectorAll('input')[FIRST]

        fireEvent.focus(input)
        fireEvent.click(container.querySelector('button[title="January"]'))
        expect(change).toBeCalledWith({
          startDate: new Date('2021-01-01'),
          endDate: new Date('2021-03-31'),
        } as DateRange)
      })
    })

    describe('clearing the inputs', () => {
      it('should return the startDate as undefined when clear the first input', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 1, year: 2021 },
              end: { month: 2, year: 2021 },
            },
          })
        )
        const span = container.querySelectorAll('span[title="Clear"]')[FIRST]

        fireEvent.click(span)
        expect(change).toBeCalledWith({
          startDate: undefined,
          endDate: new Date(2021, 3, 0, 0, 0, 0, 0),
        } as DateRange)
      })

      it('should return the endDate as undefined when clear the second input', () => {
        const change = jest.fn()
        const { container } = render(
          createComponent({
            onChange: change,
            value: {
              start: { month: 1, year: 2021 },
              end: { month: 2, year: 2021 },
            },
          })
        )
        const span = container.querySelectorAll('span[title="Clear"]')[SECOND]

        fireEvent.click(span)
        expect(change).toBeCalledWith({
          startDate: new Date(2021, 1, 1, 0, 0, 0, 0),
          endDate: undefined,
        } as DateRange)
      })
    })
  })
})
