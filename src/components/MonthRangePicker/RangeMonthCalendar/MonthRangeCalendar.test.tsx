import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { createTheme } from '../../../styles/theme/createTheme'
import { ReferenceMonthRange } from '../MonthRangePicker'
import {
  iterateObjectFields,
  normalizeCssClassNames,
} from '../../Calendar/RangeCalendar/DateRangeCalendar/DateRangeCalendar.test'
import { defaultModifierStyles } from './../../MonthPicker/MonthPicker'
import { MonthRangeCalendar, MonthRangeCalendarProps } from './MonthRangeCalendar'
import { hoverStyle } from './GenericMonthRangeCalendar'

const createComponent = (props: Partial<MonthRangeCalendarProps> = {}) => (
  <MonthRangeCalendar
    visibleMonth={{ month: 1, year: 2021 }}
    onVisibleMonthChange={jest.fn()}
    value={
      {
        start: undefined,
        end: undefined,
      } as ReferenceMonthRange
    }
    inputOnFocus={1}
    {...props}
  />
)

describe('MonthRangeCalendar', () => {
  const theme = createTheme()
  const expectedSelectedStyle = defaultModifierStyles.selected(theme)
  const expectedHoverStyle = hoverStyle(theme)
  const hoverBackground: String = expectedSelectedStyle[':hover']['background']
  expectedSelectedStyle[':hover']['background'] = hoverBackground.substr(0, hoverBackground.indexOf('!'))

  describe('Selection', () => {
    it('should have unselected style if nothing is defined', () => {
      const { container } = render(createComponent())
      iterateObjectFields(expectedSelectedStyle, (fieldName: string, fieldValue: any) =>
        expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      )
    })
    it('should have the selected style only in start month', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 0, year: 2021 },
            end: undefined,
          },
        })
      )
      iterateObjectFields(expectedSelectedStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    it('should have the selected style only in end month', () => {
      const { container } = render(
        createComponent({
          value: {
            start: undefined,
            end: { month: 1, year: 2021 },
          },
        })
      )
      iterateObjectFields(expectedSelectedStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    it('should have the selected style for the month between the start and the end values', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 1, year: 2021 },
            end: { month: 3, year: 2021 },
          },
        })
      )
      iterateObjectFields(expectedSelectedStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="March"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="April"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="May"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    it('should not have the selected style if the visible year is the next year (2022)', () => {
      const { container } = render(
        createComponent({
          visibleMonth: { month: 0, year: 2022 },
          value: {
            start: { month: 1, year: 2021 },
            end: { month: 3, year: 2021 },
          },
        })
      )
      iterateObjectFields(expectedSelectedStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="March"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="April"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="May"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
  })
  describe('Hover', () => {})
  describe('First input on focus', () => {
    it('should apply hover style only in the month pointed by the mouse if only the start month is defined', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 2, year: 2021 },
            end: undefined,
          },
        })
      )
      const jan = container.querySelector('button[title="January"]')
      fireEvent.mouseOver(jan)
      iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
        expect(jan).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="March"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    it('should apply hover style in the interval between the end month and the month pointed by the mouse if only the end month is defined', () => {
      const { container } = render(
        createComponent({
          value: {
            start: undefined,
            end: { month: 11, year: 2019 },
          },
        })
      )
      const march = container.querySelector('button[title="March"]')
      fireEvent.mouseOver(march)
      iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="March"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    describe('With the start and the end month defined', () => {
      it('should apply hover style only in the month pointed by mouse if the hover month is after the start', () => {
        const { container } = render(
          createComponent({
            value: {
              start: { month: 0, year: 2021 },
              end: { month: 1, year: 2021 },
            },
          })
        )
        const june = container.querySelector('button[title="June"]')
        fireEvent.mouseOver(june)
        iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
          expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
          expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
          expect(june).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        })
      })
      it('should apply hover style in the interval between the start month and the month pointed by the mouse if the hover month is before the start', () => {
        const { container } = render(
          createComponent({
            value: {
              start: { month: 2, year: 2021 },
              end: { month: 3, year: 2021 },
            },
          })
        )
        const jan = container.querySelector('button[title="January"]')
        fireEvent.mouseOver(jan)
        iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
          expect(jan).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(container.querySelector('button[title="February"]')).toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
          expect(container.querySelector('button[title="March"]')).not.toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
        })
      })
    })
  })
  describe('Second input on focus', () => {
    it('should apply hover style only in the month pointed by the mouse if only the end month is defined', () => {
      const { container } = render(
        createComponent({
          value: {
            start: undefined,
            end: { month: 2, year: 2021 },
          },
          inputOnFocus: 2,
        })
      )
      const jan = container.querySelector('button[title="January"]')
      fireEvent.mouseOver(jan)
      iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
        expect(jan).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
      })
    })
    it('should apply hover style in the interval between the start month and the month pointed by the mouse if only the start month is defined', () => {
      const { container } = render(
        createComponent({
          value: {
            start: { month: 1, year: 2021 },
            end: undefined,
          },
          inputOnFocus: 2,
        })
      )
      const april = container.querySelector('button[title="April"]')
      fireEvent.mouseOver(april)
      iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
        expect(container.querySelector('button[title="January"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(container.querySelector('button[title="March"]')).toHaveStyleRule(
          normalizeCssClassNames(fieldName),
          fieldValue
        )
        expect(april).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })
    describe('With the start and the end month defined', () => {
      it('should apply hover style only in the month pointed by mouse if the hover month is before the start', () => {
        const { container } = render(
          createComponent({
            value: {
              start: { month: 3, year: 2021 },
              end: { month: 4, year: 2021 },
            },
            inputOnFocus: 2,
          })
        )
        const jan = container.querySelector('button[title="January"]')
        fireEvent.mouseOver(jan)
        iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
          expect(jan).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(container.querySelector('button[title="February"]')).not.toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
          expect(container.querySelector('button[title="March"]')).not.toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
        })
      })
      it('should apply hover style in the interval between the end month and the month pointed by the mouse if the hover month is after the end', () => {
        const { container } = render(
          createComponent({
            value: {
              start: { month: 0, year: 2021 },
              end: { month: 1, year: 2021 },
            },
            inputOnFocus: 2,
          })
        )
        const april = container.querySelector('button[title="April"]')
        fireEvent.mouseOver(april)
        iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) => {
          expect(container.querySelector('button[title="March"]')).toHaveStyleRule(
            normalizeCssClassNames(fieldName),
            fieldValue
          )
          expect(april).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        })
      })
    })
  })
  it('should remove the hover style when the mouse leave', () => {
    const { container } = render(createComponent())
    const jan = container.querySelector('button[title="January"]')
    fireEvent.mouseOver(jan)
    iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) =>
      expect(jan).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
    fireEvent.mouseLeave(jan)
    iterateObjectFields(expectedHoverStyle, (fieldName: string, fieldValue: any) =>
      expect(jan).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })
})
