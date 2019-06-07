import { render } from '@testing-library/react'
import React from 'react'

import { withForm } from '../../../../test'

import { MonthField } from './MonthField'

describe('MonthField', () => {
  it('should render correctly', () => {
    const { container } = render(withForm(<MonthField onChange={jest.fn()} name='month' />))
    expect(container).toMatchSnapshot()
  })
})
