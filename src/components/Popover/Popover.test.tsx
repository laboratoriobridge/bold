import { render } from '@testing-library/react'
import React from 'react'

import { Popover } from './Popover'

it('should render correctly with title', () => {
  const { container } = render(
    <Popover title='Title' text='Popover text' placement='bottom-start'>
      <span>Testing with title</span>
    </Popover>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly without title', () => {
  const { container } = render(
    <Popover text='Popover text'>
      <span>Testing no title</span>
    </Popover>
  )
  expect(container).toMatchSnapshot()
})
