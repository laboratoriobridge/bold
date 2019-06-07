import { render } from '@testing-library/react'
import React from 'react'

import { withForm } from '../../../../test/index'

import { HiddenField } from './HiddenField'

describe('HiddenField', () => {
  it('should be rendered correctly', () => {
    const { container } = render(withForm(<HiddenField name='test' />))
    expect(container).toMatchSnapshot()
  })
})
