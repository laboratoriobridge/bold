import { render } from 'enzyme'
import React from 'react'
import { Form } from 'react-final-form'

import { withTheme } from '../../../../test'

import { TextAreaField } from './TextAreaField'

it('should render correctly', () => {
    expect(render(withTheme(
        <Form onSubmit={jest.fn()} initialValues={{ textarea: 'Value' }}>
            {() => (
                <TextAreaField label='Label' name='textarea' maxLength={100} required />
            )}
        </Form>
    ))).toMatchSnapshot()
})
