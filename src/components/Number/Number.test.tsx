import { render } from '@testing-library/react'
import React from 'react'

import { Number } from './Number'

it('should render number with "." as thousands separator and "," as decimal separator', () => {
  expect(render(<Number value={1234} />).container.textContent).toEqual('1,234')
  expect(render(<Number value={1234} formatOptions={{ minimumFractionDigits: 1 }} />).container.textContent).toEqual(
    '1,234.0'
  )
  expect(render(<Number value={1234} formatOptions={{ maximumFractionDigits: 1 }} />).container.textContent).toEqual(
    '1,234'
  )
  expect(render(<Number value={0} />).container.textContent).toEqual('0')

  expect(render(<Number value={1234.567} />).container.textContent).toEqual('1,234.567')
  expect(
    render(<Number value={1234.56789} formatOptions={{ minimumFractionDigits: 5 }} />).container.textContent
  ).toEqual('1,234.56789')
  expect(
    render(<Number value={1234.567} formatOptions={{ maximumFractionDigits: 5 }} />).container.textContent
  ).toEqual('1,234.567')
  expect(
    render(<Number value={1234.56789} formatOptions={{ maximumFractionDigits: 1 }} />).container.textContent
  ).toEqual('1,234.6')
})

it('should accept falsy values', () => {
  expect(render(<Number value={null} />).container.textContent).toEqual('')
  expect(render(<Number value={undefined} />).container.textContent).toEqual('')

  expect(render(<Number value={null} placeholder='-' />).container.textContent).toEqual('-')
  expect(render(<Number value={undefined} placeholder='-' />).container.textContent).toEqual('-')
})

it('should abbreviate numbers if "abbrev" is true', () => {
  expect(render(<Number value={1000} abbrev />).container.textContent).toEqual('1k')
  expect(render(<Number value={1000000} abbrev />).container.textContent).toEqual('1m')
  expect(render(<Number value={1300} abbrev />).container.textContent).toEqual('1.3k')
  expect(
    render(<Number value={1000} formatOptions={{ minimumFractionDigits: 1 }} abbrev />).container.textContent
  ).toEqual('1.0k')
  expect(
    render(<Number value={1000.23} formatOptions={{ minimumFractionDigits: 1 }} abbrev />).container.textContent
  ).toEqual('1.0k')
})

it('should have "title" equal to the complete number if "abbrev" is true', () => {
  expect(
    render(<Number value={1000} abbrev />)
      .container.querySelector('span')
      .getAttribute('title')
  ).toEqual('1,000')
  expect(
    render(<Number value={1000000} abbrev />)
      .container.querySelector('span')
      .getAttribute('title')
  ).toEqual('1,000,000')
  expect(
    render(<Number value={1000.23} abbrev />)
      .container.querySelector('span')
      .getAttribute('title')
  ).toEqual('1,000.23')
})

it('should allow prefix and suffix', () => {
  expect(render(<Number value={10.987} prefix='R$ ' />).container.textContent).toEqual('R$ 10.987')
  expect(render(<Number value={10.987} suffix='!!' />).container.textContent).toEqual('10.987!!')
  expect(render(<Number value={10.987} prefix='R$ ' suffix='!!' />).container.textContent).toEqual('R$ 10.987!!')

  expect(render(<Number abbrev value={10.93} prefix='R$ ' suffix='!!' />).container.textContent).toEqual('R$ 10.9!!')
})
