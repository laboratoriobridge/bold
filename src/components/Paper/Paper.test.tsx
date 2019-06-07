import { render } from '@testing-library/react'
import React from 'react'

import { Paper } from './Paper'

it('should render correctly', () => {
  const { container } = render(
    <Paper elevation={20}>
      <span>Testing with title</span>
    </Paper>
  )
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(<Paper style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})

it('should pass down props to the underlying HTML div element', () => {
  const { container } = render(<Paper id='paper-1' />)
  expect(container.querySelector('div').getAttribute('id')).toEqual('paper-1')
})
