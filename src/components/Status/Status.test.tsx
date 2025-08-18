import { render } from '@testing-library/react'
import React from 'react'
import { Status } from './Status'

it('should render correctly', () => {
  const { container } = render(
    <div>
      <Status type='info' text='Information.' />
      <Status type='success' text='Success message.' />
      <Status type='warning' text='Alert message.' />
      <Status type='danger' text='Error message.' />
    </div>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Status type='info' text='Information.' style={{ background: 'red' }} />)
  expect(container).toMatchSnapshot()
})
