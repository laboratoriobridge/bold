import { mount, render, shallow } from 'enzyme'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withTheme } from '../../../test'

import { ButtonLink } from './ButtonLink'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <ButtonLink to='/' label='Link to home' />
        </MemoryRouter >
    ))
    expect(wrapper).toMatchSnapshot()
})
