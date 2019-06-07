import { render } from '@testing-library/react'
import React from 'react'

import { Currency } from './Currency'

it('should render number with "." as thousands separator and "," as decimal separator', () => {
  expect(render(<Currency value={1234} />).container.textContent).toEqual('$1,234.00')
  expect(render(<Currency value={1234.5} />).container.textContent).toEqual('$1,234.50')
  expect(render(<Currency value={1234.564} />).container.textContent).toEqual('$1,234.56')
  expect(render(<Currency value={1234.545} />).container.textContent).toEqual('$1,234.55')
})

it('should should accept "currency" prop', () => {
  expect(render(<Currency value={1234} currency='BRL' />).container.textContent).toEqual('R$1,234.00')
})

it('should accept falsy values', () => {
  expect(render(<Currency value={null} />).container.textContent).toEqual('')
  expect(render(<Currency value={undefined} />).container.textContent).toEqual('')
})
