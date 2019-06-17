import { render } from '@testing-library/react'
import React from 'react'
import { Form } from 'react-final-form'

import { TimeField } from './TimeField'

it('TimeField should parse hh:mm:ss to hh:mm', () => {
  const timeField = () => {
    return <TimeField name='test' label='Test Label' />
  }
  const { container } = render(<Form render={timeField} onSubmit={null} initialValues={{ test: '05:30:55' }} />)

  expect(container.querySelector('input').getAttribute('value')).toEqual('05:30')
})
