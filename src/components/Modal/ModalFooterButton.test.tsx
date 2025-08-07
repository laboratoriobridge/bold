import React from 'react'
import { render } from '@testing-library/react'
import { ModalFooterButton } from './ModalFooterButton'

it('should render correctly', () => {
  const { container } = render(<ModalFooterButton>Label</ModalFooterButton>)

  expect(container).toMatchSnapshot()
})

it('should apply min-width style', () => {
  const { getByRole } = render(<ModalFooterButton>Label</ModalFooterButton>)

  expect(getByRole('button')).toHaveStyle('min-width: 9rem')
})
