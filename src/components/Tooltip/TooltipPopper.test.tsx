import { render } from '@testing-library/react'
import React from 'react'

import { TooltipPopper } from './TooltipPopper'

it('should render the small version when text length is <= 60', () => {
  const { container } = render(<TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ' />)
  expect(container).toMatchSnapshot()
})
it('should render the big version when text length is > 60', () => {
  const { container } = render(
    <TooltipPopper
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In non urna sit amet eros finibus auctor ut vitae magna. ' +
        'Donec mollis eu velit nec ullamcorper.'
      }
    />
  )
  expect(container).toMatchSnapshot()
})
it('should accept style prop', () => {
  const { container } = render(
    <TooltipPopper text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In' style={{ color: 'red' }} />
  )
  expect(container).toMatchSnapshot()
})
it('should accept empty text', () => {
  render(<TooltipPopper text={null} />)
})
