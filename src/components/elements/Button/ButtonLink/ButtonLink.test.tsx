import React from 'react'
import { MemoryRouter } from 'react-router'
import { render } from 'react-testing-library'

import { ButtonLink } from './ButtonLink'

it('should render correctly', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <ButtonLink to='/'>Link to home</ButtonLink>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})

it('should have tabIndex -1 and aria-disabled when disabled', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <ButtonLink to='/' disabled>
        Link to home
      </ButtonLink>
    </MemoryRouter>
  )
  expect(container.querySelector('a').getAttribute('aria-disabled')).toEqual('true')
  expect(container.querySelector('a').getAttribute('tabIndex')).toEqual('-1')
})
