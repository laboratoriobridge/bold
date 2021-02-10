import React from 'react'
import { Interpolation } from 'emotion'
import { matchers } from 'jest-emotion'
import { fireEvent, render } from '@testing-library/react'

import { createTheme } from '../../../../styles'
import { defaultModifierStyles } from '../../Calendar'
import { DateRange } from '../../../DateRangePicker/BaseDateRangeInput'
import { dayHoverStyle, DateRangeCalendar, DateRangeCalendarProps } from './DateRangeCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<DateRangeCalendarProps> = {}) => (
  <DateRangeCalendar
    visibleDate={new Date('2019-02-09')}
    onVisibleDateChange={jest.fn()}
    value={{ startDate: undefined, endDate: undefined } as DateRange}
    inputOnFocus={1}
    {...props}
  />
)

/**
 * iterates over the object executing an callback containing the desired tests
 * @param obj
 * @param testFn
 */
export const iterateObjectFields = (obj: Object, testFn: (fieldName: string, fieldValue: any) => void) => {
  for (const field in obj as any) {
    if (obj.hasOwnProperty(field)) {
      if (obj[field] === Object(obj[field])) {
        iterateObjectFields(obj[field], testFn)
      } else {
        testFn(field, obj[field])
      }
    }
  }
}

export const normalizeCssClassNames = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

describe('DateRangeCalendar', () => {
  const theme = createTheme()
  describe('Selection and hover', () => {
    it('With nothing defined, hovered days should have the correct css', () => {
      const { getByText } = render(createComponent())
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('14'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
        expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      )
    })

    it('When finalDate is earlier than initialDate, both should be selected', () => {
      const { getByText } = render(
        createComponent({ value: { startDate: new Date('2019-02-15'), endDate: new Date('2019-02-14') } as DateRange })
      )

      expect(getByText('14').getAttribute('aria-selected')).toBe('true')
      expect(getByText('15').getAttribute('aria-selected')).toBe('true')
    })

    it('With only the initialDate selected, just one day should have the "selectedStyle"', () => {
      const { getByText } = render(
        createComponent({ value: { startDate: new Date('2019-02-15'), endDate: undefined } as DateRange })
      )
      const expectedStyle: Interpolation = defaultModifierStyles.selected(theme)

      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('15')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('With finalDate and initialDate, the selected days must have been selected', () => {
      const { getByText } = render(
        createComponent({ value: { startDate: new Date('2019-02-11'), endDate: new Date('2019-02-13') } as DateRange })
      )

      expect(getByText('10').getAttribute('aria-selected')).toBe('false')
      expect(getByText('11').getAttribute('aria-selected')).toBe('true')
      expect(getByText('12').getAttribute('aria-selected')).toBe('true')
      expect(getByText('13').getAttribute('aria-selected')).toBe('true')
      expect(getByText('14').getAttribute('aria-selected')).toBe('false')
    })

    it('With finalDate and initialDate, the selected days should have the "selectedStyle"', () => {
      const { getByText } = render(
        createComponent({ value: { startDate: new Date('2019-02-11'), endDate: new Date('2019-02-13') } as DateRange })
      )
      const expectedStyle: Interpolation = defaultModifierStyles.selected(theme)

      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('10')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('11')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('12')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('13')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('With only initalDate defined and focus is in the first input, hover style must be applied only in the date pointed by mouse', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: new Date('2019-02-15'), endDate: undefined } as DateRange,
          inputOnFocus: 1,
        })
      )
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('17'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('17')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('18')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })

      fireEvent.mouseOver(getByText('13'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('12')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('13')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('With only initalDate defined and focus is in the second input, hover style must be applied on the interval between initialDate and mouse', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: new Date('2019-02-15'), endDate: undefined } as DateRange,
          inputOnFocus: 2,
        })
      )
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('17'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 15 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('16')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('17')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('18')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })

      fireEvent.mouseOver(getByText('13'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('12')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('13')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 15 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('With only finalDate defined and focus is in the first input, hover style must be applied on the interval between finalDate and mouse', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: undefined, endDate: new Date('2019-02-15') } as DateRange,
          inputOnFocus: 1,
        })
      )
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('17'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 15 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('16')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('17')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('18')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })

      fireEvent.mouseOver(getByText('13'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('12')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('13')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 15 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('With only finalDate defined and focus is in the second input, hover style must be applied only in the date pointed by mouse', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: undefined, endDate: new Date('2019-02-15') } as DateRange,
          inputOnFocus: 2,
        })
      )
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('17'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('17')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('18')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })

      fireEvent.mouseOver(getByText('13'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('12')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('13')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it('Hover style must be applied when initialDate and finalDate are correctly defined', () => {
      const { getByText } = render(
        createComponent({
          value: { startDate: new Date('2019-02-11'), endDate: new Date('2019-02-13') } as DateRange,
          inputOnFocus: 2,
        })
      )
      const expectedStyle = dayHoverStyle(theme)

      fireEvent.mouseOver(getByText('14'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('10')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 11 to 13 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('15')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })

      // for a date before interval, only the date will have the hover effect
      fireEvent.mouseOver(getByText('09'))
      iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
        expect(getByText('08')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('09')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        expect(getByText('10')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        // Day 11 to 13 (the day selected in the interval) skipped to preserve the purpose of this test
        expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      })
    })

    it(
      'With finalDate and initialDate, focus is in the first input and hover date' +
        'is after initialDate, hover style must be applied only in the date pointed by mouse',
      () => {
        const { getByText } = render(
          createComponent({
            value: { startDate: new Date('2019-02-13'), endDate: new Date('2019-02-15') } as DateRange,
            inputOnFocus: 1,
          })
        )
        const expectedStyle = dayHoverStyle(theme)

        fireEvent.mouseOver(getByText('17'))
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
          expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          // Day 15 is skipped to preserve the purpose of this test
          expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(getByText('17')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(getByText('18')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        })
      }
    )

    it(
      'With finalDate and initialDate, focus is in the first input and hover date' +
        'is before initialDate, hover style must be applied on the interval between initialDate and mouse',
      () => {
        const { getByText } = render(
          createComponent({
            value: { startDate: new Date('2019-02-13'), endDate: new Date('2019-02-15') } as DateRange,
            inputOnFocus: 1,
          })
        )
        const expectedStyle = dayHoverStyle(theme)

        fireEvent.mouseOver(getByText('08'))
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
          expect(getByText('07')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(getByText('08')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          expect(getByText('12')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
          // Day 13 is skipped to preserve the purpose of this test
          expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        })
      }
    )

    describe('Remove style when mouseLeave', () => {
      it('should remove the style for day hover', () => {
        const { getByText } = render(
          createComponent({
            value: { startDate: new Date('2019-02-13'), endDate: undefined } as DateRange,
            inputOnFocus: 2,
          })
        )
        const expectedStyle = dayHoverStyle(theme)

        fireEvent.mouseOver(getByText('14'))
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
          expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        )

        fireEvent.mouseLeave(getByText('14'))
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
          expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        )
      })

      it('should remove the style for week hover', () => {
        const { container } = render(
          createComponent({
            visibleDate: new Date('2021-01-03'),
            value: { startDate: new Date('2021-01-17'), endDate: undefined } as DateRange,
            inputOnFocus: 2,
            onlyWeeks: true,
          })
        )
        const expectedStyle = dayHoverStyle(theme)

        const tr = container.querySelector('tr[data-week="24/01/2021-30/01/2021"]')

        fireEvent.mouseOver(tr)
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
          expect(tr).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        )

        fireEvent.mouseLeave(tr)
        iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
          expect(tr).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
        )
      })
    })

    it('The comparisons for which days belong to the selected range should be correct', () => {
      const { getByText, rerender } = render(
        createComponent({
          visibleDate: new Date('2019-01-15'),
          value: {
            startDate: new Date('2019-02-15'),
            endDate: undefined,
          },
        })
      )
      // Showing the previous month, so nothing should be selected
      expect(getByText('15').getAttribute('aria-selected')).toBe('false')

      rerender(
        createComponent({
          visibleDate: new Date('2018-02-15'),
          value: {
            startDate: new Date('2019-02-15'),
            endDate: undefined,
          },
        })
      )
      // Showing the previous year, so nothing should be selected
      expect(getByText('15').getAttribute('aria-selected')).toBe('false')

      rerender(
        createComponent({
          visibleDate: new Date('2018-01-15'),
          value: {
            startDate: new Date('2019-02-15'),
            endDate: undefined,
          },
        })
      )
      // Showing the wrong year and month, so nothing should be selected
      expect(getByText('15').getAttribute('aria-selected')).toBe('false')
    })
  })
})
