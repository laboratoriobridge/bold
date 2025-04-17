import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalHeader } from './ModalHeader'

it('should render correctly', () => {
  const { container } = render(<ModalHeader>Header</ModalHeader>)
  expect(container).toMatchSnapshot()
})

it('should apply external "styles.container" prop', () => {
  const { container } = render(<ModalHeader styles={{ container: { color: 'red' } }}>Header</ModalHeader>)
  expect(container).toMatchSnapshot()
})
