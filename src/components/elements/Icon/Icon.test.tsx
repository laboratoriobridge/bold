import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Icon } from './Icon'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(
        <Icon icon='lapis' />
    ))
    expect(wrapper).toMatchSnapshot()
})
