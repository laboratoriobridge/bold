import { render } from '@testing-library/react'
import React, { AnchorHTMLAttributes } from 'react'

import { Text } from './Text'

it('should render correctly', () => {
  expect(render(<Text>Test 1</Text>).container).toMatchSnapshot()
})

it('should accept text style decoration props', () => {
  expect(render(<Text fontWeight='bold'>Test weight</Text>).container).toMatchSnapshot()
  expect(render(<Text fontSize={2}>Test size</Text>).container).toMatchSnapshot()
  expect(render(<Text color='primary'>Test color</Text>).container).toMatchSnapshot()
  expect(render(<Text fontStyle='italic'>Test italic</Text>).container).toMatchSnapshot()
  expect(render(<Text textDecoration='underline'>Test underline</Text>).container).toMatchSnapshot()
})

it('should accept "variant" props', () => {
  expect(render(<Text variant='main'>Main text</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='secondary'>Secondary text</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='disabled'>Disabled text</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='link'>Link</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h1'>Heading 1</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h2'>Heading 2</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h3'>Heading 3</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h4'>Heading 4</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h5'>Heading 5</Text>).container).toMatchSnapshot()
  expect(render(<Text variant='h6'>Heading 6</Text>).container).toMatchSnapshot()
})

it('should accept "component" props', () => {
  expect(render(<Text component='p'>This is a paragraph</Text>).container).toMatchSnapshot()
})

it('should accept style prop', () => {
  expect(render(<Text style={{ color: 'red' }}>This is red</Text>).container).toMatchSnapshot()
})

it('should accept HTMLElement props', () => {
  const { container } = render(<Text id='test-1'>Text</Text>)
  expect(container.querySelector('span').getAttribute('id')).toEqual('test-1')
})

it('should accept type argument and infer props', () => {
  render(
    <Text<AnchorHTMLAttributes<HTMLAnchorElement>> component='a' href='/'>
      Text as anchor tag
    </Text>
  )
})
