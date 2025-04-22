import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalHeaderWrapper } from './ModalHeaderWrapper'

it('should render children when hasHeader is true', () => {
  const { container } = render(<ModalHeaderWrapper hasHeader>Title</ModalHeaderWrapper>)
  expect(container).toMatchSnapshot()
})

it('should apply external styles prop', () => {
  const { container } = render(
    <ModalHeaderWrapper hasHeader style={{ color: 'blue' }}>
      Header with style
    </ModalHeaderWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should apply background prop if provided', () => {
  const { container } = render(
    <ModalHeaderWrapper hasHeader background='gray'>
      Header with background
    </ModalHeaderWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should render nothing when hasHeader and hasCloseIcon are both false', () => {
  const { container } = render(<ModalHeaderWrapper hasCloseIcon={false} />)
  expect(container.firstChild).toBeNull()
})
