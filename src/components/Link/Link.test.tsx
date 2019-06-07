import { render } from '@testing-library/react'
import React, { ButtonHTMLAttributes } from 'react'

import { Link } from './Link'

it('should render correctly', () => {
  const { container } = render(
    <Link href='/' target='_blank'>
      Link to somewhere
    </Link>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <Link href='/' style={{ color: 'red' }}>
      Red link
    </Link>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "component" prop', () => {
  const { container } = render(<Link component='button'>Button link</Link>)
  expect(container).toMatchSnapshot()
})

it('should accept all Text props', () => {
  const { container } = render(
    <Link color='inherit' fontSize={2} fontWeight='bolder' fontStyle='italic' textDecoration='none'>
      All text props
    </Link>
  )
  expect(container).toMatchSnapshot()
})

it('should accept type argument and infer props', () => {
  render(
    <Link<ButtonHTMLAttributes<HTMLButtonElement>> component='button' autoFocus>
      Link as button tag
    </Link>
  )
})
