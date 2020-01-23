import React from 'react'
import { Interpolation } from 'emotion'
import { matchers } from 'jest-emotion'
import { fireEvent, render } from '@testing-library/react'

import { createTheme } from '../../../../styles'
import { defaultModifierStyles } from '../../Calendar'
import { dayHoverStyle, RangeDatePickerCalendar, RangeDatePickerCalendarProps } from './RangeDatePickerCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<RangeDatePickerCalendarProps> = {}) => (
  <RangeDatePickerCalendar
    initialVisibleDate={new Date('2019-02-09')}
    initialDate={undefined}
    finalDate={undefined}
    {...props}
  />
)

/**
 * iterates over the object executing an callback containing the desired tests
 * @param obj
 * @param testFn
 */
const iterateObjectFields = (obj: Object, testFn: (fieldName: string, fieldValue: any) => void) => {
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

describe('[Calendar][RangeDatePicker]', () => {
  const theme = createTheme()
  const normalizeCssClassNames = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  it('With nothing defined, hovered days should have the correct css', () => {
    const { getByText } = render(createComponent())
    const expectedStyle = dayHoverStyle(theme)

    fireEvent.mouseOver(getByText('14'))
    iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) =>
      expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })

  it('When finalDate is earlier than initialDate, both should be selecter', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-14') })
    )

    expect(getByText('14').getAttribute('aria-selected')).toBe('true')
    expect(getByText('15').getAttribute('aria-selected')).toBe('true')
  })

  it('With only the initialDate selected, just one day should have the "selectedStyle"', () => {
    const { getByText } = render(createComponent({ initialDate: new Date('2019-02-15') }))
    const expectedStyle: Interpolation = defaultModifierStyles.selected(theme)

    iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
      expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      expect(getByText('15')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
      expect(getByText('16')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    })
  })

  it('With finalDate and initialDate, the selected days must have been selected', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-11'), finalDate: new Date('2019-02-13') })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
    expect(getByText('13').getAttribute('aria-selected')).toBe('true')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')
  })

  it('With finalDate and initialDate, the selected days should have the "selectedStyle"', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-11'), finalDate: new Date('2019-02-13') })
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

  it('With only initalDate defined, hover style must be applied on the interval between initialDate and mouse', () => {
    const { getByText } = render(createComponent({ initialDate: new Date('2019-02-15'), inputOnFocus: 2 }))
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

  // it('Hover style must be applied when initialDate and finalDate are correctly defined', () => {
  //   const { getByText } = render(
  //     createComponent({ initialDate: new Date('2019-02-11'), finalDate: new Date('2019-02-13'), inputOnFocus: 2 })
  //   )
  //   const expectedStyle = dayHoverStyle(theme)

  //   fireEvent.mouseOver(getByText('14'))
  //   iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
  //     expect(getByText('10')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //     // Day 11 to 13 (the day selected in the interval) skipped to preserve the purpose of this test
  //     expect(getByText('14')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //     expect(getByText('15')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //   })

  //   // for a date before interval, only the date will have the hover effect
  //   fireEvent.mouseOver(getByText('09'))
  //   iterateObjectFields(expectedStyle, (fieldName: string, fieldValue: any) => {
  //     expect(getByText('08')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //     expect(getByText('09')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //     expect(getByText('10')).toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //     // Day 11 to 13 (the day selected in the interval) skipped to preserve the purpose of this test
  //     expect(getByText('14')).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
  //   })
  // })

  it('Remove hover style when mouseLeave', () => {
    const { getByText } = render(createComponent({ initialDate: new Date('2019-02-13'), inputOnFocus: 2 }))
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

  it('The comparisons for which days belong to the selected range should be correct', () => {
    const { getByText, rerender } = render(
      createComponent({
        initialVisibleDate: new Date('2019-01-15'),
        initialDate: new Date('2019-02-15'),
      })
    )
    // Showing the previous month, so nothing should be selected
    expect(getByText('15').getAttribute('aria-selected')).toBe('false')

    rerender(
      createComponent({
        initialVisibleDate: new Date('2018-02-15'),
        initialDate: new Date('2019-02-15'),
      })
    )
    // Showing the previous year, so nothing should be selected
    expect(getByText('15').getAttribute('aria-selected')).toBe('false')

    rerender(
      createComponent({
        initialVisibleDate: new Date('2018-01-15'),
        initialDate: new Date('2019-02-15'),
      })
    )
    // Showing the wrong year and month, so nothing should be selected
    expect(getByText('15').getAttribute('aria-selected')).toBe('false')
  })
})
