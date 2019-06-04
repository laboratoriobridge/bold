import React from 'react'
import { render } from 'react-testing-library'

import { InfoLabel } from './InfoLabel'

it('should render correctly', () => {
  expect(render(<InfoLabel title='Test'>Content</InfoLabel>).container).toMatchSnapshot()

  expect(
    render(
      <InfoLabel title='Test' titleStyles={{ color: 'red' }} childStyles={{ color: 'blue' }}>
        Content
      </InfoLabel>
    ).container
  ).toMatchSnapshot()
})

it('should accept placeholder', () => {
  expect(render(<InfoLabel title='Test' placeholder='No value' />).container).toMatchSnapshot()
})
