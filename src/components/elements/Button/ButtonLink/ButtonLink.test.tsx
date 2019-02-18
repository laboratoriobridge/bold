import { mount, render } from 'enzyme'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import { withTheme } from '../../../../test'

import { ButtonLink } from './ButtonLink'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <ButtonLink to='/'>Link to home</ButtonLink>
        </MemoryRouter >
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should have tabIndex -1 and aria-disabled when disabled', () => {
    const wrapper = mount(withTheme(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
            <ButtonLink to='/' disabled>Link to home</ButtonLink>
        </MemoryRouter>
    ))
    expect(wrapper.find('a').first().prop('aria-disabled')).toEqual(true)
    expect(wrapper.find('a').first().prop('tabIndex')).toEqual(-1)
})
