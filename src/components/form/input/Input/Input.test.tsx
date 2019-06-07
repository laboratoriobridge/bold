import { render } from '@testing-library/react'
import React from 'react'

import { Input } from './Input'

it('should render correctly', () => {
  const { container } = render(<Input name='foo' />)
  expect(container).toMatchSnapshot()
})

it('should provide a ref to the underlying HTML input element', () => {
  const ref = React.createRef<HTMLInputElement>()
  render(<Input inputRef={ref} />)
  expect(ref.current.tagName).toEqual('INPUT')
})
