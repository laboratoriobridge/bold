import { mount, render, shallow } from 'enzyme'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withTheme } from '../../../../test'

import { IconButtonLink } from './IconButtonLink'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <IconButtonLink to='/' icon='pen' />
        </MemoryRouter >
    ))
    expect(wrapper).toMatchSnapshot()
})
