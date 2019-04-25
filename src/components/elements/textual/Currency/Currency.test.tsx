import React from 'react'
import { render } from 'react-testing-library'

import { Currency } from './Currency'

it('should render number with "." as thousands separator and "," as decimal separator', () => {
  expect(render(<Currency value={1234} />).container.textContent).toEqual('R$ 1.234,00')
  expect(render(<Currency value={1234.5} />).container.textContent).toEqual('R$ 1.234,50')
  expect(render(<Currency value={1234.564} />).container.textContent).toEqual('R$ 1.234,56')
  expect(render(<Currency value={1234.545} />).container.textContent).toEqual('R$ 1.234,55')
})

it('should accept falsy values', () => {
  expect(render(<Currency value={null} />).container.textContent).toEqual('')
  expect(render(<Currency value={undefined} />).container.textContent).toEqual('')
})
