import { render } from '@testing-library/react'
import React from 'react'
import { Form } from 'react-final-form'

import { TextAreaField } from './TextAreaField'

it('should render correctly', () => {
  const { container } = render(
    <Form onSubmit={jest.fn()} initialValues={{ textarea: 'Value' }}>
      {() => <TextAreaField label='Label' name='textarea' maxLength={100} required />}
    </Form>
  )
  expect(container).toMatchSnapshot()
})
