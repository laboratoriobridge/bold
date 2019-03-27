import { render } from 'enzyme'
import React from 'react'

import { Text } from './Text'

describe('Text', () => {
  it('should render correctly', () => {
    expect(render(<Text>Test 1</Text>)).toMatchSnapshot()
    expect(render(<Text tag='p'>Test with p tag</Text>)).toMatchSnapshot()
    expect(render(<Text weight='bold'>Test weight</Text>)).toMatchSnapshot()
    expect(render(<Text size={2}>Test size</Text>)).toMatchSnapshot()
    expect(render(<Text color='primary'>Test color</Text>)).toMatchSnapshot()
    expect(render(<Text fontStyle='italic'>Test italic</Text>)).toMatchSnapshot()
  })
  it('should accept style prop', () => {
    expect(
      render(
        <Text weight='bold' style={{ color: 'red' }}>
          This is red
        </Text>
      )
    ).toMatchSnapshot()
  })
})
