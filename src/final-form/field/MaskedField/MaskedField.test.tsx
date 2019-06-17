import { render } from '@testing-library/react'
import React from 'react'

import { withForm } from '../../../test'

import { MaskedField } from './MaskedField'

it('render correctly', () => {
  const { container } = render(
    withForm(<MaskedField mask={['(', /\w/, ')']} label='Mask test' name='test' placeholder='Test' disabled={false} />)
  )
  expect(container).toMatchSnapshot()
})

it('render with icon', () => {
  const { container } = render(
    withForm(<MaskedField mask={['(', /\w/, ')']} name='test' icon='zoomOutline' onIconClick={jest.fn()} />)
  )
  expect(container).toMatchSnapshot()
})
