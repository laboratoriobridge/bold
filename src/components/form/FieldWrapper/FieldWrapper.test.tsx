import { render } from 'enzyme'
import React from 'react'

import { FieldWrapper } from './'

it('should render correctly', () => {
  expect(render(<FieldWrapper>Test</FieldWrapper>)).toMatchSnapshot()

  expect(
    render(
      <FieldWrapper name='test' label='Label' error='Error' required>
        Teste
      </FieldWrapper>
    )
  ).toMatchSnapshot()
})
