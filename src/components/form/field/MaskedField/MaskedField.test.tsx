import { mount, render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'
import { InputIconDecorator } from '../../input/InputIconDecorator/InputIconDecorator'

import { MaskedField } from './MaskedField'

it('render correctly', () => {
    const wrapper = render(withForm(
        <MaskedField mask={['(', /\w/, ')']} label='Mask test' name='test' placeholder='Test' disabled={false} />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('render with icon', () => {
    const wrapper = mount(withForm(
        <MaskedField mask={['(', /\w/, ')']} name='test' icon={{ icon: 'search', onClick: jest.fn() }} />
    ))
    expect(wrapper.find(InputIconDecorator).length).toEqual(1)
})
