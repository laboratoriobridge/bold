import { mount, render } from 'enzyme'
import * as React from 'react'

import { withForm, withRouter, withTheme } from '../../../../test/index'
import { Form } from '../../finalForm/Form/Form'

import { MaskedField } from './MaskedField'
import { TimeField } from './maskedFields'

it('render correctly', () => {
    const wrapper = render(withForm(
        <MaskedField mask={['(', /\w/, ')']} label='Mask test' name='test' placeholder='Test' disabled={false} />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('render with icon', () => {
    const wrapper = render(withForm(
        <MaskedField mask={['(', /\w/, ')']} name='test' icon='zoomOutline' onIconClick={jest.fn()} />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('TimeField should parse hh:mm:ss to hh:mm', () => {
    const timeField = () => {
        return <TimeField name='test' label='Test Label' />
    }
    const wrapper = mount(withRouter(withTheme(
        <Form
            render={timeField}
            onSubmit={null}
            initialValues={{ test: '05:30:55' }}
        />
    )))

    expect(wrapper.find(TimeField).find('input').props().defaultValue).toBe('05:30')
})
