import { render } from '@testing-library/react'

import { PeriodInput } from './PeriodInput'
import { Period } from './PeriodInputBase'

describe('render', () => {
  it('should render correctly', () => {
    const { container } = render(<PeriodInput />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when disabled', () => {
    const { container } = render(<PeriodInput disabled />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when invalid', () => {
    const { container } = render(<PeriodInput invalid />)
    expect(container).toMatchSnapshot()
  })
})

describe('format', () => {
  it('should accept and format period as value')
  const { container } = render(
    <PeriodInput value={{ startDate: new Date('2019-01-01'), finalDate: new Date('2019-02-02') } as Period} />
  )
  const input = container.querySelector('input')
  expect(input.value).toEqual('')
})
