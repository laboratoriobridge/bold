import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { createTheme } from '../../styles'

import { getMonthNames } from '../../util/locale'
import {
  iterateObjectFields,
  normalizeCssClassNames,
} from '../Calendar/RangeCalendar/DateRangeCalendar/DateRangeCalendar.test'
import { hoverStyle } from '../MonthRangePicker/RangeMonthCalendar/GenericMonthRangeCalendar'
import { createMonthStylesFn, defaultModifiers, defaultModifierStyles, MonthPicker } from './MonthPicker'

const date = new Date('2019-01-31')
const visibleMonth = { month: date.getMonth(), year: date.getFullYear() }
const today = new Date()
const currentMonth = { month: today.getMonth(), year: today.getFullYear() }

describe('MonthPicker', () => {
  it('should render correctly with month and year', () => {
    const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('should change de visible year on "Previous year" button click', () => {
    const onChange = jest.fn()
    const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={onChange} />)
    fireEvent.click(container.querySelector('button[title="Previous year"]'))
    const expectedYear = date.getFullYear() - 1
    expect(onChange).toHaveBeenCalledWith({ month: visibleMonth.month, year: expectedYear })
  })

  it('should change de visible year on "Next year" button click', () => {
    const onChange = jest.fn()
    const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={onChange} />)
    fireEvent.click(container.querySelector('button[title="Next year"]'))
    const expectedYear = date.getFullYear() + 1
    expect(onChange).toHaveBeenCalledWith({ month: visibleMonth.month, year: expectedYear })
  })

  it('should call "onChange" when a month is selected', () => {
    const onChange = jest.fn()
    const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={onChange} />)
    fireEvent.click(container.querySelector('button[title="February"]'))
    expect(onChange).toHaveBeenCalledWith({ month: 1, year: date.getFullYear() })
  })

  it('should change the visible year on re-render', () => {
    const { rerender, getAllByText } = render(
      <MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={jest.fn()} />
    )

    const newYear = date.getFullYear() + 1

    rerender(
      <MonthPicker visibleMonth={{ month: visibleMonth.month, year: newYear }} onVisibleMonthChange={jest.fn()} />
    )
    expect(getAllByText(newYear.toString())).toHaveLength(1)
  })

  it('should call onMonthClick when a month is clicked', () => {
    const click = jest.fn()
    const { container } = render(
      <MonthPicker visibleMonth={visibleMonth} onMonthClick={click} onVisibleMonthChange={jest.fn()} />
    )
    fireEvent.click(container.querySelector('button[title="February"]'))
    expect(click).toHaveBeenCalledWith({ month: 1, year: visibleMonth.year })
  })

  it('should call onMonthHover when a month is hovered', () => {
    const hover = jest.fn()
    const { container } = render(
      <MonthPicker visibleMonth={visibleMonth} onMonthHover={hover} onVisibleMonthChange={jest.fn()} />
    )
    fireEvent.mouseOver(container.querySelector('button[title="February"]'))
    expect(hover).toHaveBeenCalledWith({ month: 1, year: visibleMonth.year })
  })

  describe('default props', () => {
    const theme = createTheme()
    const notExpectecSelectedStyle = defaultModifierStyles.selected(theme)
    const notExpectedHoverStyle = hoverStyle(theme)
    const expectedCurrentStyle = defaultModifierStyles.current(theme)

    it('should define onMonthClick', () => {
      const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={jest.fn()} />)

      const button = container.querySelector('button[title="March"]')
      fireEvent.click(button)

      iterateObjectFields(notExpectecSelectedStyle, (fieldName: string, fieldValue: any) =>
        expect(button).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      )
    })

    it('should define onMonthHover', () => {
      const { container } = render(<MonthPicker visibleMonth={visibleMonth} onVisibleMonthChange={jest.fn()} />)

      const button = container.querySelector('button[title="March"]')
      fireEvent.mouseOver(button)

      iterateObjectFields(notExpectedHoverStyle, (fieldName: string, fieldValue: any) =>
        expect(button).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      )
    })

    it('should apply the current style by default', () => {
      const { container } = render(<MonthPicker visibleMonth={currentMonth} onVisibleMonthChange={jest.fn()} />)

      const long = getMonthNames('en')[today.getMonth()].long

      const button = container.querySelector(`button[title="${long}"]`)

      iterateObjectFields(expectedCurrentStyle, (fieldName: string, fieldValue: any) =>
        expect(button).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      )
    })
  })

  describe('modifiers', () => {
    describe('current', () => {
      it('should return true if date is today', () => {
        expect(defaultModifiers.current(currentMonth, {} as any)).toBeTruthy()
        expect(defaultModifiers.current(visibleMonth, {} as any)).toBeFalsy()
      })
    })
    describe('selected', () => {
      it('should return false by default', () => {
        expect(defaultModifiers.selected(currentMonth, {} as any)).toBeFalsy()
        expect(defaultModifiers.selected(visibleMonth, {} as any)).toBeFalsy()
      })
    })
  })
})

describe('getMonthNames', () => {
  it('should return an array of month names in short format', () => {
    expect(getMonthNames('pt-BR')).toEqual([
      { short: 'Jan', long: 'Janeiro' },
      { short: 'Fev', long: 'Fevereiro' },
      { short: 'Mar', long: 'Março' },
      { short: 'Abr', long: 'Abril' },
      { short: 'Mai', long: 'Maio' },
      { short: 'Jun', long: 'Junho' },
      { short: 'Jul', long: 'Julho' },
      { short: 'Ago', long: 'Agosto' },
      { short: 'Set', long: 'Setembro' },
      { short: 'Out', long: 'Outubro' },
      { short: 'Nov', long: 'Novembro' },
      { short: 'Dez', long: 'Dezembro' },
    ])

    expect(getMonthNames('en')).toEqual([
      { short: 'Jan', long: 'January' },
      { short: 'Feb', long: 'February' },
      { short: 'Mar', long: 'March' },
      { short: 'Apr', long: 'April' },
      { short: 'May', long: 'May' },
      { short: 'Jun', long: 'June' },
      { short: 'Jul', long: 'July' },
      { short: 'Aug', long: 'August' },
      { short: 'Sep', long: 'September' },
      { short: 'Oct', long: 'October' },
      { short: 'Nov', long: 'November' },
      { short: 'Dec', long: 'December' },
    ])
  })

  describe('createMonthStylesFn', () => {
    const theme = createTheme()
    it('should return merged styles from all modifiers that apply', () => {
      const stylesCreator = createMonthStylesFn(
        {
          current: () => true,
          selected: () => true,
          birthday: () => false,
        },
        {
          current: defaultModifierStyles.current,
          selected: defaultModifierStyles.selected,
          birthday: defaultModifierStyles.current,
        },
        theme
      )
      expect(stylesCreator({ month: 0, year: 2021 })).toMatchSnapshot()
    })
    it('should throw a error if a style is not provided for a predicate', () => {
      const stylesCreator = createMonthStylesFn(
        {
          current: () => true,
          selected: () => true,
          custom: () => false,
        },
        defaultModifierStyles,
        theme
      )
      expect(() => {
        stylesCreator({ month: 0, year: 2021 })
      }).toThrowError('You must provied a modifierStyle for predicate "custom"')
    })
  })
})
