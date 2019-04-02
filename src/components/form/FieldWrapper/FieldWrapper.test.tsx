import React from 'react'
import { render } from 'react-testing-library'

import { FieldWrapper } from './FieldWrapper'

it('should render correctly', () => {
  const { container, rerender } = render(<FieldWrapper>Test</FieldWrapper>)
  expect(container).toMatchSnapshot()

  rerender(
    <FieldWrapper name='test' label='Label' error='Error' required>
      Test
    </FieldWrapper>
  )
  expect(container).toMatchSnapshot()
})
