import { render } from '@testing-library/react'
import React from 'react'

import { Heading } from './Heading'

it('should render correctly', () => {
  expect(render(<Heading level={1}>Heading 1</Heading>).container).toMatchSnapshot()
  expect(render(<Heading level={2}>Heading 2</Heading>).container).toMatchSnapshot()
  expect(render(<Heading level={3}>Heading 3</Heading>).container).toMatchSnapshot()
  expect(render(<Heading level={4}>Heading 4</Heading>).container).toMatchSnapshot()
  expect(render(<Heading level={5}>Heading 5</Heading>).container).toMatchSnapshot()
  expect(render(<Heading level={6}>Heading 6</Heading>).container).toMatchSnapshot()
})

it('should accept all text props', () => {
  const { container } = render(
    <Heading level={1} color='primary' fontWeight='bolder' fontSize={4} textDecoration='underline' fontStyle='italic'>
      Heading with all text props
    </Heading>
  )
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(
    <Heading level={1} style={{ color: 'red' }}>
      Heading Primary color
    </Heading>
  )
  expect(container).toMatchSnapshot()
})
