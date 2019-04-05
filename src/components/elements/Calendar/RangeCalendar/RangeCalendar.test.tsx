import { matchers } from 'jest-emotion'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { createTheme } from '../../../../styles'

import { RangeCalendar, RangeCalendarProps } from './RangeCalendar'

expect.extend(matchers)

const createComponent = (props: Partial<RangeCalendarProps> = {}) => (
  <RangeCalendar initialVisibleDate={new Date('2019-02-09')} initialDate={null} finalDate={null} {...props} />
)

describe('[Calendar][RangePicker]', () => {
  const theme = createTheme()

  it('Should initialize with null values if initialValues is null', () => {
    const { getAllByRole } = render(createComponent())

    getAllByRole('button').forEach(item => expect(item.getAttribute('aria-selected')).toBe('false'))
  })

  it('When finalDate is earlier than initialDate, both should be undefined', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-15'), finalDate: new Date('2019-02-14') })
    )

    expect(getByText('14').getAttribute('aria-selected')).toBe('false')
    expect(getByText('15').getAttribute('aria-selected')).toBe('false')
  })

  it('With finalDate after than initialDate, the selected days must have been selected', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-11'), finalDate: new Date('2019-02-13') })
    )

    expect(getByText('10').getAttribute('aria-selected')).toBe('false')
    expect(getByText('11').getAttribute('aria-selected')).toBe('true')
    expect(getByText('12').getAttribute('aria-selected')).toBe('true')
    expect(getByText('13').getAttribute('aria-selected')).toBe('true')
    expect(getByText('14').getAttribute('aria-selected')).toBe('false')
  })

  it('Days should have been selected', () => {
    const { getByText } = render(createComponent())

    fireEvent.mouseOver(getByText('14'))
    expect(getByText('14')).toHaveStyleRule('background', theme.pallete.gray.c90)
  })

  it('Hover style must be applied on the interval between initialDate and mouse', () => {
    const { getByText } = render(createComponent({ initialDate: new Date('2019-02-15') }))

    fireEvent.mouseOver(getByText('17'))
    expect(getByText('14')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('15')).toHaveStyleRule('background', theme.pallete.primary.main)
    expect(getByText('16')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('17')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('18')).not.toHaveStyleRule('background', theme.pallete.gray.c90)

    fireEvent.mouseOver(getByText('13'))
    expect(getByText('16')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('15')).toHaveStyleRule('background', theme.pallete.primary.main)
    expect(getByText('14')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('13')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('12')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
  })

  it('Hover style must be applied when initialDate and finalDate are correctly defined', () => {
    const { getByText } = render(
      createComponent({ initialDate: new Date('2019-02-11'), finalDate: new Date('2019-02-13') })
    )

    fireEvent.mouseOver(getByText('15'))
    expect(getByText('10')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('13')).toHaveStyleRule('background', theme.pallete.primary.main)
    expect(getByText('14')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('15')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('16')).not.toHaveStyleRule('background', theme.pallete.gray.c90)

    fireEvent.mouseOver(getByText('09'))
    expect(getByText('14')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('11')).toHaveStyleRule('background', theme.pallete.primary.main)
    expect(getByText('10')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('09')).toHaveStyleRule('background', theme.pallete.gray.c90)
    expect(getByText('08')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
  })

  it('Remove hover style when mouseLeave', () => {
    const { getByText } = render(createComponent({ initialDate: new Date('2019-02-13') }))

    fireEvent.mouseOver(getByText('14'))
    expect(getByText('14')).toHaveStyleRule('background', theme.pallete.gray.c90)

    fireEvent.mouseLeave(getByText('14'))
    expect(getByText('14')).not.toHaveStyleRule('background', theme.pallete.gray.c90)
  })
})
