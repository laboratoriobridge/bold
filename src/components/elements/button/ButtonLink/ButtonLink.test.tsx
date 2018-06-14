import { mount, render, shallow } from 'enzyme'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withTheme } from '../../../../test'

import { ButtonLink } from './ButtonLink'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <ButtonLink to='/' label='Link to home' />
        </MemoryRouter >
    ))
    expect(wrapper).toMatchSnapshot()
})

it('deve have tabIndex -1 and aria-disabled when disabled', () => {
    const wrapper = render(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <ButtonLink to='/' label='Link to home' disabled />
        </MemoryRouter >
    ))
    expect(wrapper).toMatchSnapshot()
})
