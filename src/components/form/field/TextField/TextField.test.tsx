import { mount, render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { TextField } from './TextField'

it('should be rendered correctly', () => {
    const wrapper = render(withForm(<TextField name='test' placeholder='Test' maxLength={2} disabled={false} />))
    expect(wrapper).toMatchSnapshot()
})

it('should not include field props on rendered HTML', () => {
    const wrapper = render(withForm(
        <TextField
            name='test'
            label='Test'
            hasWrapper={true}
            parse={jest.fn()}
            format={jest.fn()}
            convert={jest.fn()}
            required
        />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should call onChange with current value', () => {
    const change = jest.fn()
    const wrapper = mount(withForm(<TextField name='test' onChange={change} />))
    wrapper.find('input').simulate('change', { target: { value: 'foo' } })
    expect(change).toHaveBeenCalledTimes(1)
    expect(change.mock.calls[0][0].target.value).toEqual('foo')
})
