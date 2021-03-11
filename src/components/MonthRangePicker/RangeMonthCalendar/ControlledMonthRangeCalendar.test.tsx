import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { ReferenceMonthRange } from '../MonthRangePicker'
import { ControlledMonthRangeCalendar, ControlledMonthRangeCalendarProps } from './ControlledMonthRangeCalendar'

const createComponent = (props: Partial<ControlledMonthRangeCalendarProps> = {}) => (
  <ControlledMonthRangeCalendar
    visibleMonth={{ month: 1, year: 2021 }}
    onVisibleMonthChange={jest.fn()}
    onChange={jest.fn()}
    inputOnFocus={1}
    minMonth={undefined}
    maxMonth={undefined}
    value={
      {
        start: undefined,
        end: undefined,
      } as ReferenceMonthRange
    }
    {...props}
  />
)

describe('ControlledMonthRangeCalendar', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(createComponent())
      expect(container).toMatchSnapshot()
    })

    it('should render correctly without receiving a value', () => {
      const { container } = render(createComponent({ inputOnFocus: 2 }))
      expect(container).toMatchSnapshot()
    })
  })
  describe('controllMonthClick', () => {
    it('should change only the start value when focus is on first input and the selected value is before the start value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 1, year: 2022 } },
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="January"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 0, year: 2021 },
        end: { month: 1, year: 2022 },
      } as ReferenceMonthRange)
    })
    it('should change only the end value when focus is on second input and the selected value is after the end value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 2, year: 2021 } },
          inputOnFocus: 2,
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="December"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 1, year: 2021 },
        end: { month: 11, year: 2021 },
      } as ReferenceMonthRange)
    })
    it('should start a new period when focus is on first input and the selected value is after the end value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 2, year: 2021 } },
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="December"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 11, year: 2021 },
        end: undefined,
      } as ReferenceMonthRange)
    })
    it('should start a new period when focus is on second input and the selected value is before the start value', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 2, year: 2021 } },
          inputOnFocus: 2,
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="January"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 0, year: 2021 },
        end: undefined,
      } as ReferenceMonthRange)
    })
    it('should only change the start value when focus is on first input and the selected value is between the start and end values', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 3, year: 2021 } },
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="March"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 2, year: 2021 },
        end: { month: 3, year: 2021 },
      } as ReferenceMonthRange)
    })
    it('should only change the end value when focus is on second input and the selected value is between the start and end values', () => {
      const change = jest.fn()
      const { container } = render(
        createComponent({
          value: { start: { month: 1, year: 2021 }, end: { month: 3, year: 2021 } },
          inputOnFocus: 2,
          onChange: change,
        })
      )
      const button = container.querySelector('button[title="November"]')
      fireEvent.click(button)
      expect(change).toHaveBeenCalledWith({
        start: { month: 1, year: 2021 },
        end: { month: 10, year: 2021 },
      } as ReferenceMonthRange)
    })
  })
})
