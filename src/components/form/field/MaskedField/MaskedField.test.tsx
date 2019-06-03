import React from 'react'
import { render } from 'react-testing-library'

import { withForm } from '../../../../test/index'
import { Form } from '../../finalForm/Form/Form'

import { MaskedField } from './MaskedField'
import { TimeField } from './maskedFields'

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

it('TimeField should parse hh:mm:ss to hh:mm', () => {
  const timeField = () => {
    return <TimeField name='test' label='Test Label' />
  }
  const { container } = render(<Form render={timeField} onSubmit={null} initialValues={{ test: '05:30:55' }} />)

  expect(container.querySelector('input').getAttribute('value')).toEqual('05:30')
})
