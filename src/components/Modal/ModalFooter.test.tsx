import { render } from '@testing-library/react'
import * as React from 'react'
import { ModalFooterButton } from './ModalFooterButton'

import { ModalFooter } from './ModalFooter'

it('should render correctly', () => {
  const { container } = render(<ModalFooter primarySlot={<ModalFooterButton>Click</ModalFooterButton>} />)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <ModalFooter primarySlot={<ModalFooterButton>Click</ModalFooterButton>} style={{ color: 'red' }} />
  )
  expect(container).toMatchSnapshot()
})
