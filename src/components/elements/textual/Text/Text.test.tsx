import React from 'react'
import { render } from 'react-testing-library'

import { Text } from './Text'

it('should render correctly', () => {
  expect(render(<Text>Test 1</Text>).container).toMatchSnapshot()
  expect(render(<Text tag='p'>Test with p tag</Text>).container).toMatchSnapshot()
  expect(render(<Text weight='bold'>Test weight</Text>).container).toMatchSnapshot()
  expect(render(<Text size={2}>Test size</Text>).container).toMatchSnapshot()
  expect(render(<Text color='primary'>Test color</Text>).container).toMatchSnapshot()
  expect(render(<Text fontStyle='italic'>Test italic</Text>).container).toMatchSnapshot()
})

it('should accept style prop', () => {
  expect(
    render(
      <Text weight='bold' style={{ color: 'red' }}>
        This is red
      </Text>
    ).container
  ).toMatchSnapshot()
})
